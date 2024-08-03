from flask import Flask, render_template, request, jsonify
import serial
import logging
import socket

# Configuration
log_debug = True  # Set to True to log commands instead of sending to Arduino
network_enabled = False  # Enable sending commands over network /!\ still in development

vcp_port = '/dev/ttyUSB1'
vcp_speed = 57600

network_protocol = 'TCP'  # Choose between 'UDP' and 'TCP'
network_address = '192.168.1.2'  # IP address to send commands to
network_port = 12345  # Port number for network communication

# Initialize serial port only if not in debug mode
serial_port = None
if not log_debug:
    serial_port = serial.Serial(vcp_port, vcp_speed)
else:
    # Configure logging
    logging.basicConfig(level=logging.INFO)

app = Flask(__name__)


def send_over_network(data):
    """Send data over the network using the specified protocol."""
    if network_protocol == 'UDP':
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.sendto(data.encode(), (network_address, network_port))
    elif network_protocol == 'TCP':
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.connect((network_address, network_port))
            sock.sendall(data.encode())


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/command', methods=['POST'])
def commandQuad():
    data = request.json
    command_type = data.get('type', 'full')  # Can be 'full' or 'hex'
    full_command = data.get('full_command')
    command = data.get('command')
    hex_value = data.get('hex')
    shift_level = data.get('shift_level')

    # Determine what to send based on the command type
    if command_type == 'command':
        data_to_send = command
    elif command_type == 'hex':
        data_to_send = hex_value
    else:  # 'full' or any other value
        data_to_send = f"{full_command} (Shift: {shift_level}, Hex: {hex_value})"

    if log_debug:
        logging.info(f"Command logged (debug mode): {data_to_send}")
    else:
        serial_port.write(data_to_send.encode())

    if network_enabled:
        send_over_network(data_to_send)

    return jsonify({"command": data_to_send})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

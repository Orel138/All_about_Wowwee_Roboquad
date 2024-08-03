
# Roboquad Remote Control Simulator

Emulates the original Wowwee Roboquad robot remote control with a web-based interface.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technical Details](#technical-details)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project simulates the remote control for the Wowwee Roboquad robot toy. It provides a web interface that mimics the physical remote, allowing users to control the robot using their web browser. The simulation is powered by a Python backend using Flask.

## Features

- **Web-Based Interface**: Control the Roboquad from any device with a web browser.
- **Infrared Communication**: Simulates the original remote control using an IR transmitter.
- **Dynamic Command Feedback**: Displays the command sent and its corresponding hexadecimal value.
- **Shift Levels**: Adjust and send commands with varying shift levels.

## Requirements

### Software
- Python 3.x
- Flask 2.x
- pyserial 3.x

### Hardware
- Wowwee Roboquad
- MCU (STM32, arduino .etc)
- IR LED for transmitting signals
- IR receiver (optional, for debugging)

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Orel138/All_about_Wowwee_Roboquad.git
   ```

2. **Navigate to the Simulator Directory**
   ```bash
   cd All_about_Wowwee_Roboquad/roboquad_remote_simulator
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. **Run the Server**
   ```bash
   python app.py
   ```

2. **Access the Interface**
   - Open your web browser and go to `http://127.0.0.1:5000`.

3. **Control the Roboquad**
   - Use the on-screen buttons to send commands to the robot.

> **Note:** The IR detector for the robot is located in its head. Ensure the robot is facing the IR transmitter for accurate communication.

## Configuration

### Serial Port
- You may need to edit `app.py` to set the Virtual COM Port name to the appropriate value (e.g., `/dev/ttyACM0` on Linux, `COM8` on Windows).
- Set the `log_debug` variable to `False` to enable actual communication with the robot, or keep it `True` to log commands for testing.

### Network Settings
- By default, the server runs on `127.0.0.1` and port `5000`. You can change these settings in the `app.py` script if needed.

## Technical Details

### Command Structure
- Commands are encoded in a specific format that includes the action and the shift level.
- For actions related to the states (activity, aggression, awareness), the command includes the state color (green, orange, red) or the shift level.
- Commands are sent as hexadecimal values corresponding to the original remote's IR signals.

### Hexadecimal Mapping
- The project includes a mapping of commands to their hexadecimal values, facilitating accurate command replication.

## Troubleshooting

- **No Response from Robot**: Ensure the robot is facing the IR transmitter and that the correct serial port is set in `app.py`.
- **Web Interface Issues**: Check the console for error messages, ensure all dependencies are installed, and verify the server is running.

## Contributing

We welcome contributions to improve the simulator. To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.

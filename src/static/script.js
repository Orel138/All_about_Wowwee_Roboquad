let currentShiftLevel = 1;
const maxShiftLevel = 4;

const indicatorStates = {
    activity: 0,
    aggression: 0,
    awareness: 0,
};

// Object mapping for hex values for each command state
const hexValues = {
    'activity-2': '0x631',
    'activity-3': '0x651',
    'activity-4': '0x691',
    'aggression-2': '0x633',
    'aggression-3': '0x653',
    'aggression-4': '0x693',
    'awareness-2': '0x632',
    'awareness-3': '0x652',
    'awareness-4': '0x692',
    'stop-1': '0x600',
    'stop-2': '0x620',
    'stop-3': '0x640',
    'stop-4': '0x680',
    'forward-1': '0x601',
    'forward-2': '0x621',
    'forward-3': '0x641',
    'forward-4': '0x681',
    'backward-1': '0x602',
    'backward-2': '0x622',
    'backward-3': '0x642',
    'backward-4': '0x682',
    'left-1': '0x603',
    'left-2': '0x623',
    'left-3': '0x643',
    'left-4': '0x683',
    'right-1': '0x604',
    'right-2': '0x624',
    'right-3': '0x644',
    'right-4': '0x684',
    'top-left-1': '0x605',
    'top-left-2': '0x625',
    'top-left-3': '0x645',
    'top-left-4': '0x685',
    'top-right-1': '0x606',
    'top-right-2': '0x626',
    'top-right-3': '0x646',
    'top-right-4': '0x686',
    'bottom-left-1': '0x607',
    'bottom-left-2': '0x627',
    'bottom-left-3': '0x647',
    'bottom-left-4': '0x687',
    'bottom-right-1': '0x608',
    'bottom-right-2': '0x628',
    'bottom-right-3': '0x648',
    'bottom-right-4': '0x688',
    'clockwise-1': '0x609',
    'clockwise-2': '0x629',
    'clockwise-3': '0x649',
    'clockwise-4': '0x689',
    'counter-clockwise-1': '0x60a',
    'counter-clockwise-2': '0x62a',
    'counter-clockwise-3': '0x64a',
    'counter-clockwise-4': '0x68a',
    'demo-1': '0x616',
    'demo-2': '0x636',
    'demo-3': '0x656',
    'demo-4': '0x696',
    'autonomy-1': '0x610',
    'autonomy-2': '0x630',
    'autonomy-3': '0x650',
    'autonomy-4': '0x690',
    'program-1': '0x614',
    'program-2': '0x634',
    'program-3': '0x654',
    'program-4': '0x694',
    'play-1': '0x615',
    'play-2': '0x635',
    'play-3': '0x655',
    'play-4': '0x695',
};

// Function to update the visual indicator based on the state
function updateIndicator(indicator, state) {
    switch (state) {
        case 0:
            indicator.style.backgroundColor = 'rgba(60, 218, 60, 0.5)'; // Green
            break;
        case 1:
            indicator.style.backgroundColor = 'rgba(218, 168, 60, 0.5)'; // Orange
            break;
        case 2:
            indicator.style.backgroundColor = 'rgba(218, 78, 60, 0.5)'; // Red
            break;
        case null:
        default:
            indicator.style.backgroundColor = 'transparent'; // Transparent
    }
}

// Function to reset indicators to transparent
function resetIndicators() {
    updateIndicator(document.querySelector('.activity-indicator'), null);
    updateIndicator(document.querySelector('.aggression-indicator'), null);
    updateIndicator(document.querySelector('.awareness-indicator'), null);
}

// Function to determine the command based on the base command and state
function getCommand(baseCommand, state) {
    // Check if the baseCommand is related to status indicators
    if (['activity', 'aggression', 'awareness'].includes(baseCommand)) {
        if (currentShiftLevel === 1) {
            let stateSuffix;
            switch (state) {
                case 1:
                    stateSuffix = 'orange';
                    break;
                case 2:
                    stateSuffix = 'red';
                    break;
                case 0:
                default:
                    stateSuffix = 'green';
            }
            return `${baseCommand}-${stateSuffix}`;
        } else {
            return `${baseCommand}-${currentShiftLevel}`;
        }
    } else {
        // For other commands, including shift levels
        return `${baseCommand}-${currentShiftLevel}`;
    }
}

// Function to calculate the binary state of the three indicators and convert it to hex
function calculateIndicatorsHex() {
    // States are encoded in binary: 2 bits per indicator (00, 01, 10)
    // Header: 011011 | aggression | awareness | activity
    const header = '011011';
    const aggressionBits = indicatorStates.aggression.toString(2).padStart(2, '0');
    const awarenessBits = indicatorStates.awareness.toString(2).padStart(2, '0');
    const activityBits = indicatorStates.activity.toString(2).padStart(2, '0');

    // Construct the full binary string
    const binaryString = header + aggressionBits + awarenessBits + activityBits;

    // Convert the binary string to a hexadecimal value
    const hexValue = parseInt(binaryString, 2).toString(16).toUpperCase().padStart(3, '0');
    return `0x${hexValue}`;
}


// Function to update the shift level indicator's color
function updateShiftIndicator(state) {
    const indicator = document.querySelector('.shift-level-indicator');
    switch (state) {
        case 1:
            indicator.style.backgroundColor = 'transparent'; // Default (transparent)
            break;
        case 2:
            indicator.style.backgroundColor = 'rgba(60, 218, 60, 0.904)'; // Green
            break;
        case 3:
            indicator.style.backgroundColor = 'orange';
            break;
        case 4:
            indicator.style.backgroundColor = 'red';
            break;
        default:
            indicator.style.backgroundColor = 'transparent';
    }
}

// Function to send the command to the server
function sendCommand(command) {
    let hexValue;
    
    // Determine if the command is related to the indicators
    if ((command.includes('activity') || command.includes('aggression') || command.includes('awareness')) && (currentShiftLevel === 1)) {
        hexValue = calculateIndicatorsHex();
    } else {
        hexValue = hexValues[command] || '0x00'; // Use mapping for other commands
    }

    const payload = {
        full_command: command,
        shift_level: currentShiftLevel,
        hex: hexValue
    };

    fetch(`/command`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        updateMessageBox(`Command executed: ${data.command}, Hex: ${hexValue}`);
    })
    .catch(error => {
        console.error('Error:', error);
        updateMessageBox('Failed to execute command.');
    });
}

// Function to update the message box content
function updateMessageBox(message) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
}

// Event listener for the Shift button
document.getElementById('shiftButton').addEventListener('click', function() {
    currentShiftLevel = (currentShiftLevel % maxShiftLevel) + 1;
    this.innerText = `Shift Level: ${currentShiftLevel}`;
    updateShiftIndicator(currentShiftLevel);
    if (currentShiftLevel !== 1) {
        resetIndicators();
    }
});

// Event listeners for all buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(event) {
        let command = '';

        if (this.classList.contains('shift')) {
            return; // Skip the shift button as it has its own handler
        } else if (this.classList.contains('activity')) {
            if (currentShiftLevel === 1) { // Only update if shift is default (transparent)
                indicatorStates.activity = (indicatorStates.activity + 1) % 3;
                updateIndicator(document.querySelector('.activity-indicator'), indicatorStates.activity);
            }
            command = getCommand('activity', indicatorStates.activity);
        } else if (this.classList.contains('aggression')) {
            if (currentShiftLevel === 1) { // Only update if shift is default (transparent)
                indicatorStates.aggression = (indicatorStates.aggression + 1) % 3;
                updateIndicator(document.querySelector('.aggression-indicator'), indicatorStates.aggression);
            }
            command = getCommand('aggression', indicatorStates.aggression);
        } else if (this.classList.contains('awareness')) {
            if (currentShiftLevel === 1) { // Only update if shift is default (transparent)
                indicatorStates.awareness = (indicatorStates.awareness + 1) % 3;
                updateIndicator(document.querySelector('.awareness-indicator'), indicatorStates.awareness);
            }
            command = getCommand('awareness', indicatorStates.awareness);
        } else if (this.classList.contains('direction-stop')) {
            command = getCommand('stop', 0);
            if (currentShiftLevel == 1) {
                resetIndicators();
            }
        } else if (this.classList.contains('direction-forward')) {
            command = getCommand('forward', 0);
        } else if (this.classList.contains('direction-backward')) {
            command = getCommand('backward', 0);
        } else if (this.classList.contains('direction-right')) {
            command = getCommand('right', 0);
        } else if (this.classList.contains('direction-left')) {
            command = getCommand('left', 0);
        } else if (this.classList.contains('direction-top-right')) {
            command = getCommand('top-right', 0);
        } else if (this.classList.contains('direction-top-left')) {
            command = getCommand('top-left', 0);
        } else if (this.classList.contains('direction-bottom-right')) {
            command = getCommand('bottom-right', 0);
        } else if (this.classList.contains('direction-bottom-left')) {
            command = getCommand('bottom-left', 0);
        } else if (this.classList.contains('direction-clockwise')) {
            command = getCommand('clockwise', 0);
        } else if (this.classList.contains('direction-counter-clockwise')) {
            command = getCommand('counter-clockwise', 0);
        } else if (this.classList.contains('demo')) {
            command = getCommand('demo', 0);
        } else if (this.classList.contains('autonomy')) {
            command = getCommand('autonomy', 0);
        } else if (this.classList.contains('program')) {
            command = getCommand('program', 0);
        } else if (this.classList.contains('play')) {
            command = getCommand('play', 0);
        }

        if (command) {
            sendCommand(command);
        }
    });
});
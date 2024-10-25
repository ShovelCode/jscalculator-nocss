// Reference to the display element
const display = document.getElementById('display');

// Append a character to the display
function appendCharacter(character) {
    display.value += character;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result based on the current display value
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

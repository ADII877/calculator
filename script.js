function appendNumber(number) {
    const display = document.getElementById('display');
    display.value = display.value + number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value = display.value + ' ' + operator + ' ';
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.innerText += input;
}

function allClear() {
    display.innerText = "";
}

function deleteDisplay() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error";
    }
}
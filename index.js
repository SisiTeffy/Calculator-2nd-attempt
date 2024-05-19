const display = document.getElementsById('display');

function appendToDisplay(input) {
    display.value += input;
}

function allClear() {
    display.value = "";
}

function deleteDisplay() {

}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
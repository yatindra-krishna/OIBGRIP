function myclick(a) {
    calculator.display.value += a;
}
function percentage() {
    calculator.display.value = (calculator.display.value / 100);
}
function square() {
    calculator.display.value = Math.pow(calculator.display.value, 2);
}
function cube() {
    calculator.display.value = Math.pow(calculator.display.value, 3);
}
function ac() {
    calculator.display.value = "";
}
function equalto() {
    calculator.display.value = eval(calculator.display.value);
}
// faturamento.js

function addValue() {
    var inputElement = document.getElementById("final");
    var currentValue = parseFloat(inputElement.value.replace(',', '.')) || 0;
    var newValue = currentValue + 1000;
    inputElement.value = newValue.toFixed(2).replace('.', ',');
}

function subtractValue() {
    var inputElement = document.getElementById("final");
    var currentValue = parseFloat(inputElement.value.replace(',', '.')) || 0;
    var newValue = currentValue - 1000;
    if (newValue < 0) {
        newValue = 0;
    }
    inputElement.value = newValue.toFixed(2).replace('.', ',');
}

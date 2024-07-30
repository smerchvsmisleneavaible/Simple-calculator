//Вывести выбранное значение в поле
function addToNumDisplay(value) {
    document.getElementById('numDisplay').value += value;
}
//Вычисление
function calculatingResult() {
    try {
        document.getElementById('numDisplay').value = eval(document.getElementById('numDisplay').value);
    } catch (error) {
        document.getElementById('numDisplay').value = 'Error';
    }
}
//Очистить введенные значения
function cleanNumDisplay() {
    document.getElementById('numDisplay').value = '';
}
//Смена знака
function changeSignNum() {
    document.getElementById('numDisplay').value = eval(document.getElementById('numDisplay').value) * -1;
}
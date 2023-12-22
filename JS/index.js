function getElementValueById(elementId) {
    const valueField = document.getElementById(elementId);
    const valueFieldString = valueField.value;
    const value = parseFloat(valueFieldString);
    // valueField.value = '';
    return value;
}

function setTextById(elementId, value) {
    const valueTextField = document.getElementById(elementId);

    valueTextField.innerText = value;

}


document.getElementById('btn-calculate').addEventListener('click', function () {

    const income = getElementValueById('income');
    const food = getElementValueById('food');
    const rent = getElementValueById('rent');
    const clothes = getElementValueById('clothes');
    const newtotalExpense = food + rent + clothes;
    setTextById('total-expense', newtotalExpense);
    const newBalance = income - newtotalExpense;
    setTextById('balance', newBalance);


})
document.getElementById('btn-save').addEventListener('click', function () {
    const save = getElementValueById('save-info');
    const income = getElementValueById('income');
    const newSavings = ((save * income) / 100);
    setTextById('save-ammount', newSavings);

    const Balance = document.getElementById('balance').innerText;
    const newBalance = parseFloat(Balance);
    const remaining = newBalance - newSavings;
    setTextById('remain-balance', remaining);

})

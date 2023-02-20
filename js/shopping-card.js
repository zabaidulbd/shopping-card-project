function caseFunction(isIncrease) {
    const caseInputField = document.getElementById('case-input-field');
    const caseInputFieldValueAmount = caseInputField.value;
    const caseInputFieldValue = parseInt(caseInputFieldValueAmount);


    let caseInputFieldValueTotal;
    if (isIncrease == true) {
        caseInputFieldValueTotal = caseInputFieldValue + 1;
    }
    else {
        caseInputFieldValueTotal = caseInputFieldValue - 1;
    }

    caseInputField.value = caseInputFieldValueTotal;
    return caseInputFieldValueTotal;
}
function casePrice(caseFinalTotal) {
    const newValue = caseFinalTotal * 59;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = newValue;
}


document.getElementById('btn-case').addEventListener('click', function () {
    const caseFinalTotal = caseFunction(true);
    casePrice(caseFinalTotal);
    finalSubTotal();

})
document.getElementById('case-input-minus').addEventListener('click', function () {
    const caseFinalTotal = caseFunction(false);
    casePrice(caseFinalTotal);
    finalSubTotal();
})
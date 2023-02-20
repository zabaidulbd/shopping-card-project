function phonePrice(isIncrease) {
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputFieldValue = phoneInputField.value;
    const phoneInputFieldValueTotal = parseInt(phoneInputFieldValue);
    let phoneTotalAmount;
    if (isIncrease) {
        phoneTotalAmount = phoneInputFieldValueTotal + 1;
    }
    else {
        phoneTotalAmount = phoneInputFieldValueTotal - 1;
    }
    phoneInputField.value = phoneTotalAmount;
    return phoneTotalAmount;
}
function allTotal(phoneTotal) {
    const phoneNewValue = phoneTotal * 1219;
    const phoneValueTotal = document.getElementById('phone-total');
    phoneValueTotal.innerText = phoneNewValue;
}

document.getElementById('btn-phone').addEventListener('click', function () {
    const phoneTotal = phonePrice(true);
    allTotal(phoneTotal);
    finalSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneTotalPrice = phonePrice(false);
    allTotal(phoneTotalPrice);
    finalSubTotal();

})

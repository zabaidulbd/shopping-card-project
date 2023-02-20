function subTotal(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalElementString = phoneTotalElement.innerText;
    const phoneTotalElementFinal = parseInt(phoneTotalElementString);
    return phoneTotalElementFinal;
}
function setValue(setId, value) {
    const finalTotalElement = document.getElementById(setId);
    finalTotalElement.innerText = value;
}

function finalSubTotal() {
    const totalSub = subTotal('phone-total');
    const totalSubElement = subTotal('case-total');
    const finalTotal = totalSub + totalSubElement;
    setValue('sub-total', finalTotal);
    // calculate tax
    const taxAmountString = (finalTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setValue('tax-amount', taxAmount);
    // calculate total
    const totalAmount = finalTotal + taxAmount;
    setValue('total-amount', totalAmount);

}
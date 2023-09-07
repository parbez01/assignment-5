function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById('selected-item');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const needValue = document.getElementById('choose-item')
    const li = document.createElement('li');
    li.innerText = itemName;
    needValue.appendChild(li);

}

let total = 0;
function handClickBtnTwo(target) {
    const productprices = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const productPrice = parseFloat(productprices);
    total = total + productPrice;
    const totalPrice = document.getElementById('first-total');
    totalPrice.innerText = total.toFixed(2);
    const afterTotal = document.getElementById('after-total');
    afterTotal.innerText = total.toFixed(2);

    const makePurchaseButton = document.getElementById('purchase-button');
    if (total > 0) {
        makePurchaseButton.removeAttribute('disabled');
    } else {
        makePurchaseButton.setAttribute('disabled', 'true')
    }

    // discount

    const buttonApply = document.getElementById('applyButton');
    if (total >= 200) {
        buttonApply.removeAttribute('disabled');
    } else {
        buttonApply.setAttribute('disabled', 'disabled');
    }
}


document.getElementById('applyButton').addEventListener('click', function () {
    const setValue = document.getElementById('couponInput');

    const previousDiscount = document.getElementById('discount-total');

    const totalPrice = document.getElementById('first-total');

    const newDiscount = document.getElementById('after-total');
    let total = parseFloat(totalPrice.innerText);
    if (setValue.value === 'SELL200') {
        const updateDiscount = total * 0.2;
        previousDiscount.innerText = updateDiscount.toFixed(2);

        const finalTotal = total - updateDiscount;
        totalPrice.innerText = total.toFixed(2);
        newDiscount.innerText = finalTotal.toFixed(2);

    } else {
        previousDiscount.innerText = '0.00';
        newDiscount.innerText = total.toFixed(2);
    }
})


function back() {
    document.getElementById('first-total').innerText = '0.00';
    document.getElementById('discount-total').innerText = '0.00';
    document.getElementById('after-total').innerText = '0.00';
    document.getElementById('couponInput').value = null;
    document.getElementById('choose-item').innerText = null;
    total = 0;

    if (total <= 0) {
        document.getElementById('purchase-button').disabled = true;
        document.getElementById('applyButton').disabled = true;
        document.getElementById('couponInput').value = null;
        document.getElementById('choose-item').innerText = null;
    }
}









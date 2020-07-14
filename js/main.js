
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = (isNaN(amountNumber)) ? 0 : amountNumber;
    showSumPrice(price, amountNumber)
}

function showSumPrice(price, amountNumber){
    amountNumber = amountNusmber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("max 10 vehető");
    } else if (amountNumber < 1) {
        alert("min 1 kell");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    } 
}


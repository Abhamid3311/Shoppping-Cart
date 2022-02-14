
function updateNumber(product, price, isAssain) {
    //product Number
    let productNumberInput = document.getElementById(product + '-number');
    let productNumber = productNumberInput.value;
    if (isAssain == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productNumberInput.value = productNumber;

    //update Total
    let productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //call The Calculate function
    calculate()
}
//get case and Phone Input number for calculating

function getProductInput(product) {
    let productInput = document.getElementById(product + '-number');
    let getProductNumber = productInput.value;
    return getProductNumber;
}
//calculate Total amount
function calculate() {
    let phoneTotal = getProductInput("phone") * 1219;
    let caseTotal = getProductInput("case") * 59;
    let subTotal = phoneTotal + caseTotal;
    let tax = subTotal / 10;
    let total = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = total;
}



//phone update
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber("phone", 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber("phone", 1219, false);
})

//case Update
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumber("case", 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber("case", 59, false);
}

//Total proccess


/* for making shoping cart we have to do 5 step.
1. add listener for +/- input number. and Update number
2. get input product Number.
3. update Product total in innerText by Input number and Price.
4. make New function for Get Input number For calculation Total amount.
5.Calculate all amount and show in the inner text.
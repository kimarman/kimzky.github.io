var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";

    let totalCost = 0;

    if (parseFloat(qty1.value) > 0) {
        let order1 = ${qty1.value} x ${price1.textContent} = ${(parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2)} Php - ${product1.textContent};
        totalCost += parseFloat(qty1.value) * parseFloat(price1.textContent);
        carts.textContent += ${order1}\n;
    }

    if (parseFloat(qty2.value) > 0) {
        let order2 = ${qty2.value} x ${price2.textContent} = ${(parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2)} Php - ${product2.textContent};
        totalCost += parseFloat(qty2.value) * parseFloat(price2.textContent);
        carts.textContent += ${order2}\n;
    }

    total.value = totalCost.toFixed(2);
    updateChange();
}

function updateChange() {
    if (parseFloat(cash.value) >= parseFloat(total.value)) {
        change.value = (parseFloat(cash.value) - parseFloat(total.value)).toFixed(2);
    } else {
        change.value = "0.00";
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", updateChange);

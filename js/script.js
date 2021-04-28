let chosenCurrency = document.querySelector(".js-chosenCurrency")
let finalCurrency = document.querySelector(".js-finalCurrency")
let formElement = document.querySelector(".js-formElement")
let result = document.querySelector(".js-result")

let currency = document.querySelector(".js-currency")


chosenCurrency.addEventListener("input", () => {

    if (chosenCurrency.value === finalCurrency.value) {
        finalCurrency.value = "";
    }
});

finalCurrency.addEventListener("input", () => {

    if (chosenCurrency.value === finalCurrency.value) {
        finalCurrency.value = "";
    }
});


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rate = currency.value;
    let EURPLN = rate * 4.53;
    let PLNEUR = rate * 0.22;
    let USDPLN = rate * 3.74;
    let USDEUR = rate * 0.82;
    let PLNUSD = rate * 0.26;
    let EURUSD = rate * 1.21;

    if (chosenCurrency.value === "EUR" && finalCurrency.value === "PLN") {
        result.value = EURPLN.toFixed(2);
    } else if (chosenCurrency.value === "EUR" && finalCurrency.value === "USD") {
        result.value = EURUSD.toFixed(2);

    }
    else if (chosenCurrency.value === "PLN" && finalCurrency.value === "EUR") {
        result.value = PLNEUR.toFixed(2);

    };


    if (chosenCurrency.value === "USD" && finalCurrency.value === "PLN") {
        result.value = USDPLN.toFixed(2);

    } else if (chosenCurrency.value === "USD" && finalCurrency.value === "EUR") {
        result.value = USDEUR.toFixed(2);

    } else if (chosenCurrency.value === "PLN" && finalCurrency.value === "USD") {
        result.value = PLNUSD.toFixed(2);

    }





});

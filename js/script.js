{
    const chosenCurrency = document.querySelector(".js-chosenCurrency")
    const finalCurrency = document.querySelector(".js-finalCurrency")

    const donotRepeatName = () => {

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
    };

    const calculateResult = () => {
        const result = document.querySelector(".js-result")
        const currency = document.querySelector(".js-currency")
        const amount = +currency.value;
        const rateEUR = 4.53
        const rateUSD = 3.74
        const EURPLN = amount * rateEUR;
        const PLNEUR = amount * (1 / rateEUR);
        const USDPLN = amount * rateUSD;
        const USDEUR = amount * (rateUSD / rateEUR);
        const PLNUSD = amount * (1 / rateUSD);
        const EURUSD = amount * (rateEUR / rateUSD);

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
        };

    };

    const init = () => {
        formElement = document.querySelector(".js-formElement")
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            calculateResult();
        });
    };

    donotRepeatName();
    init();
};



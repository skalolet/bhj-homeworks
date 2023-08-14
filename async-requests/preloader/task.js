document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.getElementById("items");
    const loader = document.getElementById("loader");

    function hideLoader() {
        loader.classList.remove("loader_active");
    }

    function loadCurrencyRates() {
        fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
            .then((response) => response.json())
            .then((data) => {
                const valuteData = data.response.Valute;

                itemsContainer.innerHTML = "";

                for (const currencyCode in valuteData) {
                    const currency = valuteData[currencyCode];
                    const item = document.createElement("div");
                    item.classList.add("item");

                    const codeElement = document.createElement("div");
                    codeElement.classList.add("item__code");
                    codeElement.textContent = currency.CharCode;

                    const valueElement = document.createElement("div");
                    valueElement.classList.add("item__value");
                    valueElement.textContent = currency.Value.toFixed(2);

                    const currencyElement = document.createElement("div");
                    currencyElement.classList.add("item__currency");
                    currencyElement.textContent = "руб.";

                    item.appendChild(codeElement);
                    item.appendChild(valueElement);
                    item.appendChild(currencyElement);

                    itemsContainer.appendChild(item);
                }

                hideLoader();
            })
            .catch((error) => {
                console.error("Error loading currency rates:", error);
                hideLoader();
            });
    }

    loadCurrencyRates();
});

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.init();

    const sellButtons = document.querySelectorAll(".converter__sell-btn");
    sellButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        sellButtons.forEach((i) => {
          if (i.classList.contains("selected")) {
            i.classList.remove("selected");
          }
        });
        button.classList.add("selected");
      });
    });

    const buyButtons = document.querySelectorAll(".converter__buy-btn");
    buyButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        buyButtons.forEach((item) => {
          if (item.classList.contains("selected")) {
            item.classList.remove("selected");
          }
        });
        button.classList.add("selected");
      });
    });

    const getPrice = (firstCurrency, secondCurrency) => {
      fetch(
        `https://api.exchangerate.host/latest?base=${firstCurrency}&symbols=${secondCurrency}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.rate = data.rates[secondCurrency];

          this.view.updateSellText(
            `1 ${secondCurrency} = ${this.rate} ${firstCurrency} `
          );
          this.newPrice =
            firstCurrency != secondCurrency ? (1 / this.rate).toFixed(6) : 1;
          this.view.updateBuyText(
            `1 ${secondCurrency} = ${this.newPrice} ${firstCurrency} `
          );
          this.view.updateInputValue(this.newPrice);
          if (firstCurrency === secondCurrency) {
            this.view.updateInputValue(this.sellInput.value);
          }
          if (this.newValue && firstCurrency != secondCurrency) {
            this.view.updateInputValue(
              this.model.calcPrice(this.newValue, this.rate)
            );
          }
          this.sellInput = this.view.sellCurrencyInput;
          this.sellInput.addEventListener("keyup", (e) => {
            this.newValue = this.sellInput.value;
            this.view.updateInputValue(
              this.model.calcPrice(this.newValue, this.rate)
            );
          });
        });
    };

    const buttonsEvent = () => {
      buyButtons.forEach((item) => {
        if (item.classList.contains("selected")) {
          this.buyCurrency = item.innerHTML;
          getPrice(this.buyCurrency, this.sellCurrency);
        }
        item.addEventListener("click", () => {
          if (item.classList.contains("selected")) {
            this.buyCurrency = item.innerHTML;
            getPrice(this.buyCurrency, this.sellCurrency);
          }
        });
      });

      sellButtons.forEach((item) => {
        if (item.classList.contains("selected")) {
          this.sellCurrency = item.innerHTML;
          getPrice(this.buyCurrency, this.sellCurrency);
        }
        item.addEventListener("click", () => {
          if (item.classList.contains("selected")) {
            this.sellCurrency = item.innerHTML;
            getPrice(this.buyCurrency, this.sellCurrency);
          }
        });
      });
    };

    buttonsEvent();
  }
}

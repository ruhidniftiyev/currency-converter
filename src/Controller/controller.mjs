export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.init();
    const newCurrencySellInput = document.querySelector(".newCurrency");
    newCurrencySellInput.addEventListener("keypress", (e) => {
      if (typeof this.obj[newCurrencySellInput.value] != 'undefined' && e.key === "Enter") {
        console.log(newCurrencySellInput.value);
        this.view.addNewCurrency(newCurrencySellInput.value);
        this.view.addNewBuyCurrency(newCurrencySellInput.value);
        newCurrencySellInput.value = "";
        this.selectSell();
        this.selectBuy();
        this.renderSell();
        this.renderBuy();
      }
      if(typeof this.obj[newCurrencySellInput.value] === 'undefined' && e.key === "Enter") {
        console.log('NET TAKOY VALYUTI')
      }
    });

    this.selectSell();
    this.selectBuy();

    this.getPrice = (firstCurrency, secondCurrency) => {
      fetch(
        `https://api.exchangerate.host/latest?base=${firstCurrency}&symbols=${secondCurrency}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.rate = data.rates[secondCurrency];
          this.newPrice =
            firstCurrency != secondCurrency ? (1 / this.rate).toFixed(6) : 1;
          this.view.updateSellText(
            `1 ${secondCurrency} = ${this.newPrice} ${firstCurrency} `
          );

          this.view.updateBuyText(
            `1 ${firstCurrency} = ${this.rate} ${secondCurrency} `
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

    this.renderSell();
    this.renderBuy();
    this.getObject();
  }
  selectSell() {
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
  }

  selectBuy() {
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
  }

  renderSell() {
    const sellBtn = document.querySelectorAll(".converter__sell-btn");
    sellBtn.forEach((item) => {
      if (item.classList.contains("selected")) {
        this.sellCurrency = item.innerHTML;
        this.getPrice(this.buyCurrency, this.sellCurrency);
      }
      item.addEventListener("click", () => {
        if (item.classList.contains("selected")) {
          this.sellCurrency = item.innerHTML;
          this.getPrice(this.buyCurrency, this.sellCurrency);
        }
      });
    });
  }

  renderBuy() {
    const buyBtn = document.querySelectorAll(".converter__buy-btn");
    buyBtn.forEach((item) => {
      if (item.classList.contains("selected")) {
        this.buyCurrency = item.innerHTML;
        this.getPrice(this.buyCurrency, this.sellCurrency);
      }
      item.addEventListener("click", () => {
        if (item.classList.contains("selected")) {
          this.buyCurrency = item.innerHTML;
          this.getPrice(this.buyCurrency, this.sellCurrency);
        }
      });
    });
  }

  getObject() {
    fetch(`https://api.exchangerate.host/latest?base=USD&symbols=`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.rates);
        this.obj = data.rates;
      });
  }
}

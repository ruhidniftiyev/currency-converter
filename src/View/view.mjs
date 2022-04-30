export default class View {
  constructor() {
    this.root = document.getElementById("root");
  }

  init() {
    this.render();
  }

  render() {
    this.container = this.createDiv({
      class: "container",
    });

    this.navMenu = this.createHeader({
      class: "converter__header",
    });

    this.logoBlock = this.createDiv({
      class: "converter__logo-block",
    });

    this.logoImage = this.createImage({
      class: "converter__logo-image",
      source: "/src/assets/logo.png",
    });

    this.navList = this.createList({
      class: "converter__nav-list",
    });

    this.item1 = this.createListItem({
      text: "БАНК",
    });

    this.item2 = this.createListItem({
      text: "БИЗНЕС",
    });

    this.item3 = this.createListItem({
      text: "ИНВЕСТИЦИИ",
    });

    this.item4 = this.createListItem({
      text: "СТРАХОВАНИЕ",
    });

    this.item5 = this.createListItem({
      text: "МОБАЙЛ",
    });

    this.item6 = this.createListItem({
      text: "ПУТЕШЕСТВИЕ",
    });

    this.item7 = this.createListItem({
      text: "РАЗВЛЕЧЕНИЕ",
    });

    this.loginBlock = this.createDiv({
      class: "converter__login-block",
    });

    this.loginButton = this.createButton({
      class: "converter__login-button",
      text: "ВОЙТИ",
    });

    this.contentBlock = this.createDiv({
      class: "converter__content-block",
    });

    this.headTitle = this.createHeadTitle({
      class: "converter__headTitle",
      text: "Конвертер валют онлайн",
    });

    this.converterBlock = this.createDiv({
      class: "converter__calculator",
    });

    this.sellCurrencyBlock = this.createDiv({
      class: "converter__sell-currency",
    });

    this.sellCurrencyText = this.createParagraph({
      class: "converter__sell-text",
      text: "У меня есть",
    });

    this.sellCurrencyButtons = this.createDiv({
      class: "converter__sell-buttons",
    });

    this.sellRubles = this.createButton({
      class: "converter__sell-btn selected",
      text: "RUB",
    });

    this.sellDollars = this.createButton({
      class: "converter__sell-btn",
      text: "USD",
    });

    this.sellEuros = this.createButton({
      class: "converter__sell-btn",
      text: "EUR",
    });

    this.sellPounds = this.createButton({
      class: "converter__sell-btn",
      text: "GBP",
    });

    this.sellCalcBlock = this.createDiv({
      class: "converter__sell-calcBlock",
    });

    this.sellCurrencyInput = this.createInput({
      class: "converter__sell-input",
      value: "1",
      type: "number",
    });

    this.sellPriceText = this.createParagraph({
      class: "converter__sell-price",
      text: "1 RUB = 0.0135 USD",
    });

    this.buyCurrencyBlock = this.createDiv({
      class: "converter__buy-currency",
    });

    this.buyCurrencyText = this.createParagraph({
      class: "converter__buy-text",
      text: "Хочу приобрести",
    });

    this.buyCurrencyButtons = this.createDiv({
      class: "converter__buy-buttons",
    });

    this.buyRubles = this.createButton({
      class: "converter__buy-btn",
      text: "RUB",
    });

    this.buyDollars = this.createButton({
      class: "converter__buy-btn selected",
      text: "USD",
    });

    this.buyEuros = this.createButton({
      class: "converter__buy-btn",
      text: "EUR",
    });

    this.buyPounds = this.createButton({
      class: "converter__buy-btn",
      text: "GBP",
    });

    this.buyCalcBlock = this.createDiv({
      class: "converter__buy-calcBlock",
    });

    this.buyCurrencyInput = this.createInput({
      class: "converter__buy-input",
      value: " ",
      type: "text",
    });

    this.buyPriceText = this.createParagraph({
      class: "converter__buy-price",
      text: "1 USD = 73.8896 RUB",
    });

    this.newCurrency = this.createInput({
      class: "newCurrency",
      value: "",
      type: "text",
    });

    this.container.appendChild(this.navMenu);
    this.navMenu.appendChild(this.logoBlock);
    this.logoBlock.appendChild(this.logoImage);
    this.navMenu.appendChild(this.navList);
    this.navList.appendChild(this.item1);
    this.navList.appendChild(this.item2);
    this.navList.appendChild(this.item3);
    this.navList.appendChild(this.item4);
    this.navList.appendChild(this.item5);
    this.navList.appendChild(this.item6);
    this.navList.appendChild(this.item7);
    this.navMenu.appendChild(this.loginBlock);
    this.loginBlock.appendChild(this.loginButton);
    this.container.appendChild(this.contentBlock);
    this.contentBlock.appendChild(this.headTitle);
    this.contentBlock.appendChild(this.converterBlock);
    this.contentBlock.appendChild(this.newCurrency);
    this.converterBlock.appendChild(this.sellCurrencyBlock);
    this.sellCurrencyBlock.appendChild(this.sellCurrencyText);
    this.sellCurrencyBlock.appendChild(this.sellCurrencyButtons);
    this.sellCurrencyButtons.appendChild(this.sellRubles);
    this.sellCurrencyButtons.appendChild(this.sellDollars);
    this.sellCurrencyButtons.appendChild(this.sellEuros);
    this.sellCurrencyButtons.appendChild(this.sellPounds);

    this.sellCurrencyBlock.appendChild(this.sellCalcBlock);
    this.sellCalcBlock.appendChild(this.sellCurrencyInput);
    this.sellCalcBlock.appendChild(this.sellPriceText);
    this.converterBlock.appendChild(this.buyCurrencyBlock);
    this.buyCurrencyBlock.appendChild(this.buyCurrencyText);
    this.buyCurrencyBlock.appendChild(this.buyCurrencyButtons);
    this.buyCurrencyButtons.appendChild(this.buyRubles);
    this.buyCurrencyButtons.appendChild(this.buyDollars);
    this.buyCurrencyButtons.appendChild(this.buyEuros);
    this.buyCurrencyButtons.appendChild(this.buyPounds);

    this.buyCurrencyBlock.appendChild(this.buyCalcBlock);
    this.buyCalcBlock.appendChild(this.buyCurrencyInput);
    this.buyCalcBlock.appendChild(this.buyPriceText);

    this.root.appendChild(this.container);
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.class && (div.className = props.class);

    return div;
  }

  createHeader(props) {
    const header = document.createElement("header");

    props.class && (header.className = props.class);

    return header;
  }

  createImage(props) {
    const img = document.createElement("img");

    props.class && (img.className = props.class);
    props.source && (img.src = props.source);

    return img;
  }

  createList(props) {
    const ul = document.createElement("ul");

    props.class && (ul.className = props.class);

    return ul;
  }

  createListItem(props) {
    const li = document.createElement("li");

    props.text && (li.innerText = props.text);

    return li;
  }

  createButton(props) {
    const button = document.createElement("button");

    props.class && (button.className = props.class);
    props.text && (button.innerText = props.text);

    return button;
  }

  createHeadTitle(props) {
    const h1 = document.createElement("h1");

    props.class && (h1.className = props.class);
    props.text && (h1.innerText = props.text);

    return h1;
  }

  createParagraph(props) {
    const p = document.createElement("p");

    props.class && (p.className = props.class);
    props.text && (p.innerText = props.text);

    return p;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.class && (input.className = props.class);
    props.value && (input.value = props.value);
    props.type && (input.type = props.type);

    return input;
  }

  updateSellText(priceText) {
    this.sellPriceText.innerText = priceText;
  }

  updateBuyText(priceText) {
    this.buyPriceText.innerText = priceText;
  }

  updateInputValue(price) {
    this.buyCurrencyInput.value = price;
  }

  addNewCurrency(value) {
    const currencyButton = this.createButton({
      class: "converter__sell-btn",
      text: `${value}`,
    });
    this.sellCurrencyButtons.appendChild(currencyButton);
  }

  addNewBuyCurrency(value) {
    const currencyBuyButton = this.createButton({
      class: "converter__buy-btn",
      text: `${value}`,
    });
    this.buyCurrencyButtons.appendChild(currencyBuyButton);
  }
}

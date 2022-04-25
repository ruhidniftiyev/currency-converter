export default class Model {
    constructor() {

    }

    calcPrice(value, rate) {
        return (value / rate).toFixed(6);
    }
}
export default class Model {
    constructor() {
        this.allc = []
    }

    calcPrice(value, rate) {
        return (value / rate).toFixed(6);
    }
}
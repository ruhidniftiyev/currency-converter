import Model from "./Model/model.mjs";
import View from "./View/view.mjs";
import Controller from "./Controller/controller.mjs";

const init = () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);

    controller.init();
}

init();
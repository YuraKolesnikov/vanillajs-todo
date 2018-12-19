class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addItem.bind(this))
    }

    addItem(title) {
        const item = this.model.addItem({
            id: Math.floor(Math.random()*900) + 100,
            title,
            completed: false
        })
        this.view.addItem(item)
    }
}

export default Controller;
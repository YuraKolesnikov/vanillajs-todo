class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addItem.bind(this))
        view.on('toggle', this.toggleItem.bind(this))
        view.on('remove', this.removeItem.bind(this))
    }

    addItem(title) {
        const item = this.model.addItem({
            id: Math.floor(Math.random()*900) + 100,
            title,
            completed: false
        })
        this.view.addItem(item)
    }

    toggleItem(id) {
        const item = this.model.toggleItem(id)
        this.view.toggleItem(item.id)
    }

    removeItem() {

    }
}

export default Controller;
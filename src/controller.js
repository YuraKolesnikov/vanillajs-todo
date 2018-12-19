class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addItem.bind(this))
        view.on('toggle', this.toggleItem.bind(this))
        view.on('remove', this.removeItem.bind(this))
        view.show(model._store)
        this.changeTotalOutput()
        this.changeCompletedOutput()
    }

    addItem(title) {
        const item = this.model.addItem({
            id: Math.floor(Math.random()*900) + 100,
            title,
            completed: false
        })
        this.view.addItem(item)
        this.changeTotalOutput()
        this.changeCompletedOutput()
    }

    toggleItem(id) {
        const item = this.model.toggleItem(id)
        this.view.toggleItem(item.id)
        this.changeTotalOutput()
        this.changeCompletedOutput()
    }

    removeItem(id) {
        this.model.removeItem(id);
        this.view.removeItem(id);
        this.changeTotalOutput()
        this.changeCompletedOutput()
    }

    changeTotalOutput() {
        const output = document.getElementById('total-output')
        output.textContent = this.model._store.length;
        return output;
    }

    changeCompletedOutput() {
        const output = document.getElementById('completed-output')
        output.textContent = this.model.filterItems(true).length
        return output;
    }
}

export default Controller;
class Model {
    constructor(store = []) {
        this._store = store;
    }

    _findItem(id) {
        return this._store.find(item => item.id == id);
    }

    addItem(item) {
        this._store.push(item);
    }

    /* Future improvement
    updateItem(id, data) {
        const item = this._findItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]);
    } */
    toggleItem(id) {
        let item = this._findItem(id);
        item.completed = !item.completed;
        return item;
    }

    filterItems(bool) {
        let filteredList = this._store.filter(item => item.completed === bool)
        return filteredList;
    }

    removeItem(id) {
        const index = this._store.findIndex(item => item.id == id);
        index > -1 ? this._store.splice(index, 1) : 0
    }
}

export default Model;
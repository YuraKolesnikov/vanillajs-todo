import { EventEmitter } from './helpers';
class Model extends EventEmitter{
    constructor(store = []) {
        super()
        this._store = store;
    }

    _findItem(id) {
        return this._store.find(item => item.id == id);
    }

    addItem(item) {
        this._store.push(item);
        this.emit('change', this._store)
        return item;
    }

    toggleItem(id) {
        let item = this._findItem(id);
        item.completed = !item.completed;
        this.emit('change', this._store)
        return item;
    }

    filterItems(bool) {
        let filteredList = this._store.filter(item => item.completed === bool)
        return filteredList;
    }

    removeItem(id) {
        const index = this._store.findIndex(item => item.id == id);
        index > -1 ? this._store.splice(index, 1) : 0
        this.emit('change', this._store)
    }
}

export default Model;
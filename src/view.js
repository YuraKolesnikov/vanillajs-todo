import { createElement } from './helpers'
import { removeButtonHTML, completeButtonHTML } from './buttons'
class View {
    constructor() {
        this.form   = document.getElementById('inputForm')
        this.input  = document.getElementById('inputField')

        /* For rendering to determined ul element */
        this.todoPending    = document.getElementById('todoPending');
        this.todoCompleted  = document.getElementById('todoCompleted');

        /* For searching todo-item in order to delete it */
        this.list   = document.getElementById('taskList')
        this.tasks  = this.list.querySelectorAll('.todo-item')
    }

    _findListItem(id) {
        return this.list.querySelector(`[id="${id}"]`)
    }

    _createElement(item) {
        const removeButton = createElement('button', { className: 'remove' })
        removeButton.innerHTML = removeButtonHTML;
        const completeButton = createElement('button', { className: 'complete' })
        completeButton.innerHTML = completeButtonHTML;
        const buttons = createElement('div', { className: 'buttons' }, removeButton, completeButton)
        const listItem = createElement('li', { className: 'todo-item', id: `${item.id}`, 'data-id': 'pending' }, item.title, buttons)
        return listItem;
    }

    addItem(item) {
        const listItem = this._createElement(item);
        this.todoPending.insertBefore(listItem, this.todoPending.childNodes[0])
    }

    toggleItem(id) {
        const listItem = this._findListItem(id)
        if(listItem.dataset.id == 'pending') {
            this.todoPending.removeChild(listItem)
            listItem.dataset.id = 'completed'
            this.todoCompleted.insertBefore(listItem, this.todoCompleted.childNodes[0])
        } else if(listItem.dataset.id == 'completed') {
            this.todoCompleted.removeChild(listItem)
            listItem.dataset.id = 'pending'
            this.todoPending.insertBefore(listItem, this.todoPending.childNodes[0])
        }
        return listItem;
    }

    removeItem(id) {
        const listItem = this._findListItem(id)
        if(listItem.dataset.id == 'pending') {
            this.todoPending.removeChild(listItem)
        } else if(listItem.dataset.id == 'completed') {
            this.todoCompleted.removeChild(listItem)
        }
    }
}

export default View;
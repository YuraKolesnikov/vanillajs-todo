import Model from './model'
import View from './view'
let model = new Model();
let view = new View();
//console.log(model)
model.addItem({
    id: 1,
    title: 'Test',
    completed: false
})
model.addItem({
    id: 2,
    title: 'Testo',
    completed: false
})
model.toggleItem(1)
//console.log(model.filterItems(false))

//let taskList = document.getElementById('taskList');
//console.log(taskList)
//let tasks = Array.from(taskList.querySelectorAll('.todo-item'))
//console.log(`All tasks: ${tasks.length}`)
//let completedTasks = model.filterItems(true)
//console.log(`Completed tasks: ${completedTasks.length}`)
//console.log('Pending: ')
//console.log(view.todoPending)
//console.log('Completed: ')
//console.log(view.todoCompleted)
let newTask = view._createElement({
    id: 3,
    title: 'My test task'
})
console.log(newTask)
let todoPending = document.getElementById('todoPending')
todoPending.insertBefore(newTask, todoPending.childNodes[0])
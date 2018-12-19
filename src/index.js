import Model from './model'
import View from './view'
import Controller from './controller'
let model = new Model();
let view = new View();
let controller = new Controller(model, view)
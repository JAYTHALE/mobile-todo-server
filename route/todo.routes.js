const Router = require("express").Router()

const todoController = require("./../controller/todo.controller")

Router
    .get("/", todoController.getAllTodos)
    .post("/", todoController.addTodos)
    .put("/id:", todoController.updateTodo)
    .delete("/id:", todoController.deleteTodo)

module.exports = Router
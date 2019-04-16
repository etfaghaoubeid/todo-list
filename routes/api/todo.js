const todoController = require('../../controllers/todo.controller')
const express = require('express')
const router = express.Router()

router.get('/',todoController.getTodos)

router.post('/addTodo',todoController.createTodo)

router.put('/updateTodo/:id',todoController.udateTodo)

router.delete('/deleteTodo/:id',todoController.deleteTodo)

router.get('/getTodo/:id',todoController.getTodo)


module.exports = router
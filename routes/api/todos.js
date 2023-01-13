const { error } = require('console')
const express = require('express')
const router = express.Router()

//todo model
const Todo = require('../../models/Todo')

// Get todos
router.get('/', (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then(todos => res.json(todos))
})

// add todos
router.post('/', (req, res) => {
  const newTodo = new Todo({
    todoz: req.body.todoz
  })

  newTodo.save().then(todo => res.json(todo))
})

// update todos
router.put('/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, {
    todoz: req.body.todoz
  })
    .then(todo => todo.updateOne().then(() => res.json({ updated: true })))
    .catch(err => res.status(404).json({ updated: false }))
})

// delete todos
router.delete('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({ deleted: true })))
    .catch(err => res.status(404).json({ deleted: false }))
})

module.exports = router

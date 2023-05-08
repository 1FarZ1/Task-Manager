const express = require('express');
const { getAllTasks } = require('../controllers/tasks.js');
const Tasksrouter = express.Router();

Tasksrouter.route('/').get(getAllTasks).post()
Tasksrouter.route('/:id').get().patch().delete()



module.exports = Tasksrouter;
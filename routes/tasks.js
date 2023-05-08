const express = require('express');
const { getAllTasks } = require('../controllers/tasks.js');
const router = express.Router();

router.route('/').get(getAllTasks)



module.exports = router;
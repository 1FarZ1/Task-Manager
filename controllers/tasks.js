const Task = require('../models/task');


let getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        if(!tasks){
            return res.status(404).json({ success: false, msg: 'No tasks found' })
        }
        res.status(200).json({ success: true, tasks })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let createTask = async (req, res) => {
    try {
        if(!req.body.name || req.body.name.length < 3){
            return res.status(400).json({ success: false, msg: 'Task name must be at least 3 characters' })
        }
        const task = await Task.create(req.body);
        res.status(200).json({ success: true, task })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
       let task =  await Task.deleteOne({ _id: taskID });
        if(!task){
            return res.status(404).json({ success: false, msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ success: true, msg: 'Task deleted' })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let updateTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        let task =  await Task.findById(taskID);
        if(!task){
            return res.status(404).json({ success: false, msg: `No task with id: ${taskID}` })
        }
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;

        const task = await Task.findById(taskID);
        if(!task){
            return res.status(404).json({ success: false, msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ success: true, task })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}


module.exports =  { getAllTasks, createTask, deleteTask, updateTasks, getTask };
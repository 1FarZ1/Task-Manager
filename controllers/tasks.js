const Task = require('../models/task');


let getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, tasks })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let createTask = async (req, res) => {
    try {
        res.status(200).json({ success: true, msg: 'Show all tasks' })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let deleteTask = async (req, res) => {
    try {
        res.status(200).json({ success: true, msg: 'Show all tasks' })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let updateTasks = async (req, res) => {
    try {
        res.status(200).json({ success: true, msg: 'Show all tasks' })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}

let getTask = async (req, res) => {
    try {
        res.status(200).json({ success: true, msg: 'Show all tasks' })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}


module.exports =  { getAllTasks, createTask, deleteTask, updateTasks, getTask };
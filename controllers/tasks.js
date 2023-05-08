


let getAllTasks = async (req, res) => {
    try {
        res.status(200).json({ success: true, msg: 'Show all tasks' })
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server Error' })
    }

}


module.exports =  { getAllTasks };
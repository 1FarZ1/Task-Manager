const express = require('express');
const Tasksrouter = require('./routes/tasks');

const app = express();
const port = 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1/tasks",Tasksrouter);







app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
    }
);

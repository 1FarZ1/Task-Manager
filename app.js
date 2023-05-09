require('dotenv').config();
const express = require('express');
const Tasksrouter = require('./routes/tasks');
const { default: connectDb } = require('./db/mongoDb');


const app = express();
const port = 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1/tasks",Tasksrouter);


app.use(NotFound);









let main = async ()=>{  
try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
    }
);
} catch (error) {
    
}
}

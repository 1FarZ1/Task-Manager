import dotenv from 'dotenv';
import {connect,set} from 'mongoose';

dotenv.config();
const dbURI= 

set('strictQuery', true);
const connectDb = ()=>{
    connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true}).then((result)=>console.log("connected to db" +  result)
).catch((err)=>console.log(err));
}

export default connectDb;

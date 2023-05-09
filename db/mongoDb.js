const  {connect,set} = require( 'mongoose');

set('strictQuery', true);
const connectDb = (dbURI)=>{
    connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true}).then((result)=>console.log("connected to db" +  result)
).catch((err)=>console.log(err));
}

module.exports =  connectDb;

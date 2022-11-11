 const mongoose = require('mongoose');
require("dotenv").config()
 
 const connection =async()=>{
    const db = {
        useUnifiedTopology:true,
        useNewUrlParser:true
    }
try {
    mongoose.connect(process.env.Mongo_url, db)
    console.log("database successfully connected...")
} catch (error) {
    console.log(error,{msg:"Database connection failed..."}) 
}

 }


module.exports = connection
const mongoose = require('mongoose')
const dbConn = async ()=>{
    try{
         await mongoose.connect("mongodb+srv://vamsipaidi251002_db_user:root@cluster0.3nwfclt.mongodb.net/?appName=Cluster0").then(()=>{console.log("mogodb connected")}).catch((err)=>{console.log(err.message)})
    }catch{
        console.log("connection unsucessful")
    }
}

module.exports = dbConn
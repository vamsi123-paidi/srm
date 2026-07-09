const express = require('express');
const mongoose = require("mongoose")
const app = express();
const port = 3000;
app.use(express.json())
const getRoutes = require('./routes/getRoutes')
const postRoute = require("./routes/postRoutes")
mongoose.connect("mongodb+srv://vamsipaidi251002_db_user:root@cluster0.3nwfclt.mongodb.net/?appName=Cluster0").then(()=>{console.log("mogodb connected")}).catch((err)=>{console.log(err.message)})

app.get('/',()=>{
    res.send("welcome to student management system")
})

app.use('/get',getRoutes)
app.use('/post',postRoute)


app.listen(port,()=>{
    console.log(`the server is running at http://localhost:${port}`)
})
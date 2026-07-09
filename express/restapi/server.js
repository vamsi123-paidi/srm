const express = require('express');
const mongoose = require("mongoose")
const app = express();
const port = 3000;
app.use(express.json())
const getRoutes = require('./routes/getRoutes')
const postRoute = require("./routes/postRoutes")

const dbConn = require("./config/db")

dbConn()
app.get('/',()=>{
    res.send("welcome to student management system")
})

app.use('/get',getRoutes)
app.use('/post',postRoute)


app.listen(port,()=>{
    console.log(`the server is running at http://localhost:${port}`)
})
const express = require('express')
const app = express()
app.get("/home",(req,res)=>{
    res.send("hello this is express server from hoem page")
})
app.get("/about",(req,res)=>{
    res.send("hello this is express server from about page")
})

app.get('/info', (req, res) => {
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.url);
  res.send('Check your terminal for request info');
});

app.get('/greet', (req, res) => {
  const name = req.query.name;
  res.send(`Hello ${name || 'Guest'}!`);
});

app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})
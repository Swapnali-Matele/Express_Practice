const express = require('express');
const reqFilter = require('./ageMiddlewear.js');
const app = express();
const path = require('path');
const port = 5000;

//here we have to export route from express
const route = express.Router();



//app.use(reqFilter);  (here we are not use application level middleware)

//we use diffentlevel middleware
route.use(reqFilter);

app.get("/", (req,res)=>{
    console.log("test request");
    res.send("Welcome o home page");
})

app.get("/about", (req,res)=>{
    console.log("test request");
    res.send("Welcome o about page");
})

route.get("/user",(req,res)=>{
    console.log("test request");
    res.send("Welcome o about page");
})

route.get("/contact",(req,res)=>{
    console.log("test request");
    res.send("Welcome o about page");
})

app.use("/",route)

app.listen(port,()=>{
    console.log("listening  on port " + port    );
})
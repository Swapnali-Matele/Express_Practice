const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

const reqFilter =(req, res, next) => {
    if(!req.query.age){
        res.send("Please provide your age.");
    }else if(req.query.age < 18){
        res.send("your not eligible")
    }
        
    else {
        next();
    }

};

app.use(reqFilter);

app.get("/", (req,res)=>{
    console.log("test request");
    res.send("Welcome o home page");
})

app.get("/about", (req,res)=>{
    console.log("test request");
    res.send("Welcome o about page");
})

app.listen(port,()=>{
    console.log("listening  on port " + port    );
})
const express = require('express');const req = require('express/lib/request');
;
// in excutable form 
const app = express();

//get method or post method provide roots 
//home page 
app.get('',(req,resp)=>{
    console.log('data sent by browerser===>',req.query.name)

    resp.send('Welcome to '+req.query.name);

});

app.get('/about',(req,resp)=>{
    resp.send('hello this is about page');
});

app.get('/help',(req,resp)=>{
    resp.send('hello this is help page');
});

app.listen(5000);
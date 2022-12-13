const express = require('express');
const path = require('path');

// in excutable form 
const app = express();

// absolute method for get path 
 //console.log(__dirname);

 //to get exact path
 //console.log(path.join(__dirname,"../staticWeb"));

 const satiticPath = (path.join(__dirname,"../staticWeb"));


// built in middleware
    app.use(express.static(satiticPath));
  
  
//app.get('/',(req,res)=>{
//console.log('Hello from server');
//res.send('Hello from server');

//});

app.get('/about',(req,resp)=>{
    resp.send('hello this is about page');
});

app.get('/help',(req,resp)=>{
    resp.send('hello this is help page');
});

app.listen(5000,()=> {
    console.log('Server listening on port 5000');
});

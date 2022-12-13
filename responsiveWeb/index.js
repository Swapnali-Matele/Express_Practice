const express = require('express');
const app = express();
const path = require('path');
const port = 8000;


///path define in variable
const staticPath = (path.join(__dirname,"../responsiveWeb"));

//use middelerwear
//app.use(express.static(staticPath));

//to set the view engine
app.set("view engine", "ejs");


//template engine route 
app.get("/index",(req,res)=>{
    res.render("index");  // here we render index.hbs page 
})

//app.get(routes, callback);
app.get("/",(req,res)=>{
    res.send('hello from server');
});




app.listen(port, ()=>{
    console.log('Listening  on port ' + port);
});
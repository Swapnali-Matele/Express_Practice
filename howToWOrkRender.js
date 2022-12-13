const express = require('express');const req = require('express/lib/request');
;

const app = express();
 
// how to display output in html tag h1
app.get('/',(req,resp)=>{
    console.log('<h1>Welcome to home page<h1>')

    resp.send(`<h1>Welcome to home page</h1> <a href="/about">Go to about page</a>`);

});

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="username"  value="${req.query.name}"/> 
    <button >click me</button> 
    <a href="/">Go to home page page</a> `);
});

app.get('/help',(req,resp)=>{
    resp.send([
      {

        name: "swapnali",
        email: "swapnali@gmail.com"
      },
      {

        name: "Peter",
        email: "peter@gmail.com"
      }
    ]
    
    );
});

app.listen(5001);
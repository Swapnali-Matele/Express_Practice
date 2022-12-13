//routing

const { application } = require('express');
const express = require('express')  //ES5 method to import modules
//import express from 'express'      //ES6 method to import modules
const app= express();
const port = process.env.PORT || 3000

// app.get('/', function(req,res){
// //     res.send('Home Page')
// // })

// //all methods can acess
// app.all('/index',(req, res)=>{
//     res.send('all method can do')
// })
// // hum '/' kareke koi bhi path pe hit kar rahe hai to page not found msg aayega 
app.all('*',(req, res)=>{
    res.send('Page Not Found !!!')
})


// // hum agar 'api/'  karhe aage koi bhi word daalke ke path acess kre to wo api pe land karega 
// app.all('/api/*', (req, res)=>{
//     res.send('API Pages')
// })

// //string path "/about"
// app.get('/about',(req, res)=>{
//     res.send('About Pages')
// })

// app.get('/contact',(req, res)=>{
//     res.send('Contact Pages')
// })

// //string pattern path
// app.get('/ab?cd',(req,res)=>{
//     res.send('This routes path will match acd and abcd ')
// })

// //Regular Expression path here they match the a from given path word
// app.get(/a/,(req,res)=>{
//     res.send('This is a  ')
// })

// one callback function
// app.get('/cbexample1',(req,res)=>{
//     res.send('This is a one callback example')
// })

// //more than one callback function
// app.get('/cbexample2',(req,res,next)=>{
//     console.log('Frist callback')
//     next();
// },(req,res)=>{
//     console.log('second callback')
//      
// })

//an array of callback functions
// const cb1 = (req, res, next)=>{
//     console.log('Frist callback');
//     next();
// }
// const cb2 = (req, res, next)=>{
//     console.log('Second callback');
//     next();
// }
// const cb3 = (req, res)=>{
//     console.log('Third callback');
//     res.send('this is another callback example')
// }

// app.get('/cbexample3'[cb1, cb2, cb3])

//combination of both individual and array callback functions

// const cb1 = (req, res, next)=>{
//         console.log('Frist callback');
//         next();
//     }
//     const cb2 = (req, res, next)=>{
//         console.log('Second callback');
//         next();
//     }

//     app.get('/cbexample4',[cb1,cb2],(req,res, next)=>{
//         console.log('callback function')
//     },(req,res)=>{
//         res.send('final callback function')})

//chain routing callbacks - app.route(path)
//syntax 
app.route('/student')
    .get('arrow fun')
    .post('arrow fun')





app.listen(port,()=>{
    console.log('server listening on port %s', port);
})
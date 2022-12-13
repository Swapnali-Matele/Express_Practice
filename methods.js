const { application } = require('express');
const express = require('express');
const app = express();
const port = 6000;

//setup static and middleware
app.use(express.static(path))


app.get('/', (req, res) => {
    res.status(200).send(<h1>Welcome to Home page</h1>);
})


//adding to static asset
// SSR

//use all method
app.all("*", (req,res)=>{
    res.status(404).send(<h1>resource not found</h1>)



app.listen(port, ()=>{
    console.log('listening on port  ' + port);
});
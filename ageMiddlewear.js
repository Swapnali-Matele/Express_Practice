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
module.exports = reqFilter;
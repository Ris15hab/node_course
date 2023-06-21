
var express = require("express");
var app = express();

var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 


app.use(express.static(__dirname))

app.post("/getemail", (req,res)=>{
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    res.send(`your email is: ${firstname}${lastname}@gmail.com`);//firstname and lastname is the name of the input field not id.
});

app.listen(8000,()=>{
    console.log("listening to port 8000");
});
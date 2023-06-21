const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

//const staticPath = path.join(__dirname, '../public');
//built in middle ware
app.use(express.static(staticPath));

// const templatePath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');
const viewsPath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render('index', {
        myname: 'rishab',
    });
});

app.get("/about", (req, res) => {
    res.render('about');
});

//if the user enters something after the localhost/about/aefhie then this error is diplayed.
app.get('/about/*',(req,res)=>{
    res.render('404',{
        errorcomment:"this about page not found:(",
    });
});

app.get('*',(req,res)=>{
    res.render('404',{
        errorcomment:"page not found:(",
    });
});

//app.get("/", (req, res) => {
//    res.send("welcome to home page");
//});
//
//app.get("/contact", (req, res) => {
//    res.send("welcome to contactpage");
//});

app.listen(8000, () => {
    console.log(`listening to port 8000`);
}); 
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/about", (req, res) => {
    res.send("hello world-about");
});

app.listen(8000, () => {
    console.log("listening to port 8000");
}); 

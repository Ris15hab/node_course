//const http = require("http");
import http from 'http';
//const fs = require("fs");
//const promt=require('prompt-sync')({ sigint: true });
//var requests = require('requests');
import fs from 'fs';
import requests from 'requests';
//var input=require('./script')
//import input from './script.js';
import inquirer from "inquirer";

const homeFile = fs.readFileSync("home.html", 'utf-8');

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", (orgVal.main.temp - 273).toFixed(2));
    temperature = temperature.replace("{%tempmin%}", (orgVal.main.temp_min - 273).toFixed(2));
    temperature = temperature.replace("{%tempmax%}", (orgVal.main.temp_max - 273).toFixed(2));
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstat%}", orgVal.weather[0].main);
    return temperature;
};

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Location",
    },
];

const server = http.createServer((req, res) => {
    //var a=promt("Enter Location");
    if (req.url == '/') {
        inquirer.prompt(questions).then(answers => {
            requests(`https://api.openweathermap.org/data/2.5/weather?q=${answers.name}&appid=ec35efd8815c6e8cf3ae19adb5711292`)
                .on('data', (chunk) => {
                    const objData = JSON.parse(chunk);
                    const arrayData = [objData];//converting json data to obj and then to array data to be stored on an array

                    if (arrayData[0].cod == '404') {
                        res.writeHead(404,{"content-type":"text/html"});
                        res.end("<h1>Error 404. Page not found.</h1>");
                    }
                    else {
                        const realTimeData = arrayData.map((val) => replaceVal(homeFile, val)).join("");//we used join to convert array format to string format.
                        res.end(realTimeData);
                        console.log(realTimeData);
                    }
                })
                .on('end', (err) => {
                    if (err) return console.log('connection closed due to errors', err);

                    res.end();
                });
            //.on('error', (error) => {
            //    res.writeHead(404,{"content-type":"text/html"});
            //    res.end("<h1>Error 404. Page not found.</h1>");
            //});
        });
    }
});

server.listen(8000, "127.0.0.1");
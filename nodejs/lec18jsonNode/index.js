const fs = require('fs');

const biodata = {
    name: 'rishab',
    age: 19,
};

const jsondata = JSON.stringify(biodata);

fs.writeFile("json1.json", jsondata, (err) => {
    console.log("File created");
    console.log(err);
});

fs.readFile("json1.json", "utf8", (err, data) => {
    console.log(data);
});
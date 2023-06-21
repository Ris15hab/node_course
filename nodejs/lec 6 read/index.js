const fs=require("fs");

//fs.writeFileSync("read.txt","Hello");
//const name="Rishab";
//fs.appendFileSync("read.txt",`\nMy name is ${name}`);

const a=fs.readFileSync("read.txt",'utf8');
console.log(a);
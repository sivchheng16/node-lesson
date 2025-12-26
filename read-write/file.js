const fs = require("fs");

//Create file
//fs.writeFileSync("hello.js","this file create from file.js")
//console.log("file created!!")
//


//Read file
const data = fs.readFileSync("hello.js","utf-8")

console.log(data)

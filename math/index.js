console.log ("hello word")

const name = process.argv[2]

console.log(name)

// Moudle
//

const add = require("./math")


//console.log(add(10, 9))


//Mutiple module
//
const math = add;
console.log(math.add(10,20))
console.log(math.subtract(10,5))


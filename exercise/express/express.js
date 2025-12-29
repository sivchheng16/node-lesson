const express = require("express")
const app = express()

app.get("/", ((req,res) =>{
	res.send("Home page")
}))
app.get("/login",((req,res) => {
	res.send("login page")
})) 
app.get("/register", ((req,res)=>{
	res.send("Register Page")
}))


app.listen(4000,() => {
	console.log("running server and create exercise to paage login and register")
})

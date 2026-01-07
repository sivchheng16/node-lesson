const express = require("express")
const app = express();

app.get("/", (req,res)=> {
	res.send("Welecom Home Page");
})
app.get("/contact", (req,res) => {
	res.send("Contact us before u attendent!! :)")
})

app.listen(3000, () => {
	console.log("hello word")
})
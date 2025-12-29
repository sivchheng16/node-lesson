const express = require("express")
const app = express();

// Check if user login 
const userLogin = (req,res,next)=> {
	const isLoggedIn = false;
	
	if (isLoggedIn){
		next()
	} else{
		console.log("User is logged In!!")
		res.send("Login succesed")
	}
}

app.use((req, res, next) => {
	console.log("Request URL:", req.url)
	next();
})

//Blocked User
//
//this route will NEVER run if Blocked
//
//app.use((req,res,next) => {
//	const block = true;
//	if(block) {
//		res.send("User is Blocked!!")
//		console.log("user block")
//	} else {
//		next()
//	}
//})
//

app.get("/", (req,res)=>{
	res.send("This is a home page")
})
	
app.get("/login", userLogin, (req,res)=>{
	res.send("This is a login page")
})

app.get("/contact", (req,res)=>{
	res.send("This is a contact page")
})


app.listen(3000, () => {
	console.log("Server running on port 3000")
})


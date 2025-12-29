const express = require("express")
const app = express();
	
const auth = ((req,res,next)=> {
	const isloggedIn = false
	if (isloggedIn) {
		res.send("welecome Admin")
		next()		
	} else{"Not autherized"}
})


app.use((req,res,next)=>{
console.log("URL:",req.url)
})


app.get("login", (req,res)=>{
	res.send("user login page")

})

app.get("/admin",auth, (res,req)=> {
	console.log("admin")	
})

app.listen(3000)

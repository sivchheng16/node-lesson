const http = require("http")

const server = http.createServer((req,res) => {
	if (req.url === "/"){
		res.write("Home Page") 
	} else if (req.url ==="/about"){
		res.write("About Page")
	} else { 
		res.write ("404 page not found")
	}
	res.end();
	
})


server.listen(3000,() => {
	console.log("server running")
})

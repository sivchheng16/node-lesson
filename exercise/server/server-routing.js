const http = require("http")

const server = http.createServer((req,res)=> {
	if (req.url === "/"){
		res.write("Welecome Chheng To Node.js")
	} else if (req.url ==="/about") {
		res.write("Welecome again to about page!!")
	} else if (req.url === "/task" ) {
		res.write ("Welecome to my task that i already add to this page. " )
	} else {
		res.write("404 Server Page Not Found!!!" ) 
	}
	res.end();
})

	server.listen(3000, () => {
		console.log ("Your server is running for review in \nurl:http://localhost:3000\nurl:http://localhost:3000/about\nurl:http://localhost:3000/task")
	})

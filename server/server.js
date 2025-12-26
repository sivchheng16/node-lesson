const http = require("http")

const server = http.createServer((req,res) => {
	res.write("Hello from node.js Server")
	res.write("\nI learning Node.js for the first time and now i create the server using Node.js. That learn from ChatGPT")
	res.end()

})

server.listen(3000, () => {
	console.log("Server running at http://localhost:3000")
})



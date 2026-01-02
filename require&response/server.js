const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
//   res.setHeader("content-type", "text/plain");
//   res.write("Hello from Node.js Server");
//   res.write(
//     "\nI learning Node.js for the first time and now i create the server using Node.js. That learn from ChatGPT"
//   );
//   res.end();
  
  //send a html file as response
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000");
});

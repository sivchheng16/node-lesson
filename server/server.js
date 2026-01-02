const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set Header Content Type
  // res.setHeader("Content-Type", "text/html");

  // res.write("<h1>Hello World</h1>");
  // res.write("<h1>Hello World Again</h1>");
  // res.end();

  // path routing file
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send and html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

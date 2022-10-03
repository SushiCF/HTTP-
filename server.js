const http = require("http");
const port = 2551;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const url = req.url;

  if (url === "Ben10") {
    res.write("<h1>Página inicial</h1>");

  } else if (url === "/Aliens") {
    res.write("<h1>Sobre</h1>");

  } else if (url === "/VoMax") {
    res.write("<h1>Produtos</h1>");

  } else if (url === "/Gwen") {
    res.write("<h1>Usuário</h1>");

    if (req.method === "GET") {
      res.write("<h2>GET</h2>");
    } else if (req.method === "POST") {
      res.write("<h2>POST</h2>");
    } else if (req.method === "PATCH") {
      res.write("<h2>PATCH</h2>");
    } else if (req.method === "PUT") {
      res.write("<h2>PUT</h2>");
    } else if (req.method === "DELETE") {
      res.write("<h2>DELETE</h2>");
    }
  }

  res.end();
});

server.listen(port, () => console.log(`Running on port ${port}`));
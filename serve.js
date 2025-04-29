const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Serve arquivos estáticos (como HTML, CSS, JS) da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rota para a página principal (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Inicia o servidor e escuta em todos os IPs (0.0.0.0)
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});

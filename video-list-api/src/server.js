const express = require("express");
const app = express();
// Importa todas as rotas
const routes = require("./routes");

// Precisamos usar as routes para que as rotas funcionem
app.use(routes);

// A porta onde o servidor vai ser iniciado
const port = 3001;
app.listen(port, () => {
  console.log("Servidor iniciado na porta 3001");
});

//Importa
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Instancia do Express
const app = express();
//Adicioinando bodyParser ao express
app.use(bodyParser.json());
app.use(cors());

//Configurar a porta da API
const port = 3000;
app.listen(port, () => {
  console.log(`Api rodando na porta ${port}!`);
});

//criar uma rota
// app.use("/", (req, res) => {
//     let saida = "Chamou a rota raiz da API"
//     console.log(saida);
//     res.send(saida)
// })

app.post("/media", (req, res) => {
  let idade1 = parseFloat(req.body.idade1);
  let idade2 = parseFloat(req.body.idade2);
  let media = (idade1 + idade2) / 2;
  let obj = {
    media: media
  };

  res.send(obj);
});

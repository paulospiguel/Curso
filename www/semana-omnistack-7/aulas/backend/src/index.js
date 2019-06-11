// Arquivo de entrada da aplicação
require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const cors = require("cors");

const app = express();

// Faz que o backend escute http e websocket(Tempo Real)
const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASSWORD
  }@cluster0-chrxj.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

// Middleware responsável por deixar o websocket global
app.use((req, res, next) => {
  req.io = io;

  next();
});

// Permite o acesso de qualquer dominio por meio do FrontEnd
app.use(cors());

// Acesso a pasta upload externamente (localhost:3333/file/fileName)
app.use(
  "/file",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(routes);

server.listen(3333);

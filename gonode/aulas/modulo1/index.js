const express = require('express');

const app = express();

const logMiddleware = (req, res, next) =>{
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  
  req.nameApp = 'GOnode';

  return next();
};

app.use(logMiddleware);

app.get('/', (req, res)=> {
  return res.end(`Bem-vindo, ${req.query.name}, você está aprendendo ${req.nameApp}`);
});

// app.get('/', logMiddleware, (req, res)=> {
//   return res.end(`Bem-vindo, ${req.query.name}`);
// });

app.get('/nome/:name', (req, res) =>{
  return res.json({
    message: `Bem-vindo, ${req.params.name}`
  });
});

// app.get('/nome/:name', (req, res) =>{
//   return res.end(`Bem vindo, ${req.params.name}`);
// });

app.listen(3000);
// Express para criar o servidor
const express = require('express')
const server = express()
const db = require("./db.js")



//configurar arquivos estaticos
server.use(express.static("public"))

//Habilitar uso do req.body
server.use(express.urlencoded({ extended: true}))

//Configuração de Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
   express: server,
   noCache: true,
})

//Criando uma rota
server.get("/", function(req, res){

   db.all(`SELECT * FROM ideas`, function(err, rows){
      if (err) {
         console.log(err)
         return res.send("Erro na comunicação com o banco de dados!")
       }

      const reverseIdeas = [...rows].reverse()

   let lastIdeas = []
   for ( let idea of reverseIdeas){
      if (lastIdeas.length < 3){
         lastIdeas.push(idea)
   }
   }

      
   return res.render("index.html", {ideas:lastIdeas })
       })


})

server.get("/tarefas", function(req, res){

   db.all(`SELECT * FROM ideas`, function(err, rows){
      if (err) {
        console.log(err)
        return res.send("Erro na comunicação com o banco de dados!")
      }
   const reverseIdeas = [...rows].reverse()
   return res.render("tarefas.html", {ideas:reverseIdeas })
   })
})

server.post("/", function(req, res){
//DADOS
const query = `
INSERT INTO ideas(
img,
titulo,
categoria,
descricao,
url
) VALUES (?,?,?,?,?);
`
const values = [
  req.body.img,
  req.body.titulo,
  req.body.categoria,
  req.body.descricao,
  req.body.url,
]

db.run( query, values, function(err){
   if (err) {
      console.log(err)
      return res.send("Erro na comunicação com o banco de dados!")
    }

      return res.redirect("/tarefas")
   })
})

//Servidopr na porta 3000
server.listen(5000)
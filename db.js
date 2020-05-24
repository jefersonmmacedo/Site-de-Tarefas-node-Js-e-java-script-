const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
//TABELA
//db.run(`
//CREATE TABLE IF NOT EXISTS ideas(
 //   id INTEGER PRIMARY KEY AUTOINCREMENT,
 //   img TEXT,
 //   titulo TEXT,
 //   categoria TEXT,
 //   descricao TEXT,
 //   url TEXT
//);`)
//DADOS
//const query = `
//INSERT INTO ideas(
//img,
//titulo,
//categoria,
//descricao,
//url
//) VALUES (?,?,?,?,?);
//`
//const values = [
 //   "https://image.flaticon.com/icons/svg/1940/1940981.svg",
 //   "Cozinhar",
 //   "Alimentação",
  //  " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //  "https://github.com/jefersonmmacedo/"
//]

//db.run( query, values, function(err){
  //if (err) return console.log(err)
   //console.log(this)
  //} )

//DELETAR
//db.run(`DELETE FROM ideas WHERE id = ?`, [15], function(err){
//if (err) return console.log(err)
//console.log("Deletei", this)
//})

//CONSULTAR
//db.all(`SELECT * FROM ideas`, function(err, rows){
 //if (err) return console.log(err)

 //console.log(rows)

//})

})

module.exports = db
const express = require("express")
const app = express()
const port = 3002
app.use(express.json())

const db = require("./db")
const bcrypt = require("bcrypt")

app.post("/cadastrar", (req, res)=>{
  const cliente = req.body
  const senhaCript = bcrypt.hashSync(cliente.senha, 10)
  res.send(senhaCript)
})
app.get("/usuarios", (req, res)=>{
  res.send(usuarios)
})

app.listen(port, ()=>{
  console.log("API RODANDO NA PORTA " + port)
})

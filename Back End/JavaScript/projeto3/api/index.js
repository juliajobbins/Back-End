// npm init -> inicia a API
// npm i express -> biblioteca do express
const express = require("express")
const app = express()
const port = 3002
app.use(express.json())
// npm i mysql2
const db = require("./db")
// npm i bcrypt
const bcrypt = require("bcrypt")
// npm i cors
const cors = require("cors")
app.use(cors())
// npm i jsonwebtoken
const jwt = require("jsonwebtoken")

app.post("/cadastrar", async (req, res)=>{
  const cliente = req.body
  const senhaCript = bcrypt.hashSync(cliente.senha, 10)
  try {
    const resultado = await db.pool.query(
      `INSERT INTO clientes (
        nome_completo, cpf, estado, 
        cidade, bairro, n_casa, rua, 
        cep, email, telefone, senha
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )`,
      [cliente.nome_completo, cliente.cpf,
      cliente.estado, cliente.cidade, 
      cliente.bairro, cliente.n_casa, 
      cliente.rua, cliente.cep, 
      cliente.email, cliente.telefone, 
      senhaCript]
    )
    res.status(200).send("Cliente cadastrado!")
  } catch (erro) {
    res.status(500).send("Erro interno: " + erro)
    console.log(erro)
  }
})

app.post("/login", async (req, res) => {
  // pegar dados do body
  const login = req.body
  if (login.email == null || login.senha == null) {
    return res.status(400).json({erro: "Informe o email e senha"})
  }
  // comparar com os dados do BD
  try {
    const [resposta] = await db.pool.query(
      "SELECT nome_completo, email, senha FROM clientes WHERE email = ?",
      [login.email]
    )
    if(!resposta[0]){
      return res.status(401).json({erro: "Credenciais inválidas!"})
    }
    // verificar se a senha está correta
    if(resposta[0].senha.length < 20){
      if(resposta[0].senha != login.senha){
        return res.status(401).json({erro: "Credenciais inválidas!"})
      }
    } else {
      const senhaValida = await bcrypt.compare(login.senha, resposta[0].senha)
      if(!senhaValida){
        return res.status(401).json({erro: "Credenciais inválidas!"})
      }
    }
    // dar uma resposta 200 (ok) e devolver o TOKEN (JWT)
    const infoToken = {
      nome_completo: resposta[0].nome_completo,
      email: resposta[0].email
    }
    const tokenDeAcesso = jwt.sign(infoToken, "senha_secreta", {expiresIn: "1m"})
    return res.status(200).json({token: tokenDeAcesso})
  } catch (erro) {
    return res.status(500).json({erro: "Erro interno na API"})
  }
})

app.get("/clientes/dados", autenticar, async (req, res)=>{ // ** AUTENTICAR USUÁRIO
  // descobrir o email do usuario
  const usuario = req.usuario
  try {
    const resultado = await db.pool.query("SELECT * FROM clientes WHERE email = ?", [usuario.email])
    res.status(200).json(resultado[0])
  } catch (erro) {
    res.status(500).send("erro")
  }
})

// criar uma nova rota para consumir os produtos do banco de dados
// a rota deve retornar os produtos em json

app.get("/produtos/estoque", async (req, res) => {
  try {
    const [produtos] = await db.pool.query("SELECT * FROM produtos")
    res.status(200).json(produtos)
  } catch (erro) {
    res.status(500).json({erro: "Erro ao buscar produtos: " + erro})
  }
})

// rota para ler um produto específico do estoque

app.get("/produtos/:id", async (req,res) => {
  const id = req.params.id
  try {
    const resultado = await db.pool.query("SELECT * FROM produtos WHERE id = ?", [id])
    res.status(200).json(resultado[0][0])
  } catch(erro) {
    res.status(500).send(erro)
  }
})

app.listen(port, ()=>{
  console.log("API RODANDO NA PORTA " + port)
})

function autenticar(req, res, next) {
  // pegando o token
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  // verifica se o token é nulo
  if (token == null){
    return res.status(401).json({erro: "Token não enviado, usar Authorization Bearer <token>"})
  }
  // autorizar usuário
  jwt.verify(token, "senha_secreta", (err, usuario) => {
        if (err) return res.status(403).json({erro: "Token inválido"})
        req.usuario = usuario
        next()
    })     
}

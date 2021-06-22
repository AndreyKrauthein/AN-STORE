const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Detalhes = require("./database/Detalhes")

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexao realizada")
    })
    .catch((msgErro) => {
        console.log("Conexao nao realizada")
    })

//ejs
app.set('view engine', 'ejs')

//file static
app.use(express.static('public'))

//body-parser
app.use(bodyParser.urlencoded({urlencoded: false}))
app.use(bodyParser.json())

//rotas
app.get("/", (req, res) => {
    res.render("home")
})

app.get("/produtos", (req, res) => {
    res.render("produtos")
})

app.get("/faleConosco", (req, res) => {
    res.render("faleConosco")
})

app.get("/detalhes/:id", (req, res) => {
    let id = req.params.id
    Detalhes.findOne({
        where: {id: id}
    }).then(detalhe => {
        res.render("detalhes", {
            detalhe: detalhe
        })
    })
    
})

app.listen(3000, () => {
    console.log("App rodando!")
})
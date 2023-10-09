const express = require("express") // importar express
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "templates")

app.get('/usuarios/:id', (requisicao, resposta)  => {
    const id = requisicao.params.id
    console.log(`O usuario ${id} esta desaparecido.`)
    console.log(id)

    resposta.sendFile(`${caminho}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("SERVIDOR RODANDO NA PORTA 3000")
})

// http://localhost:3000

const fs = require("fs")

function getTodosLivros (){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroBuscado = livros.filter( livro => livro.id === id )[0]
    return livroBuscado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListadeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListadeLivros))
}

function ModificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoModificado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoModificado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}

function DeletaLivroPorId(id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indexParaRemover = livrosAtuais.findIndex(livro => livro.id === id)

    livrosAtuais.splice(indexParaRemover, 1)

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    ModificaLivro,
    DeletaLivroPorId
}
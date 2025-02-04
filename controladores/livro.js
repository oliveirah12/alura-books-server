const { getTodosLivros, getLivroPorId, insereLivro, ModificaLivro, DeletaLivroPorId } = require("../servicos/livro")


function getLivros(req, res){
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
    
}

function getLivro(req, res){
    try{
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
    
}

function postLivro(req, res){
    try{
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro criado")
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
}

function patchLivro(req, res){
    try{
        const id = req.params.id
        const body = req.body
        ModificaLivro(body, id)
        res.status(200)
        res.send("Item modificado") 
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
}

function DeleteLivro(req, res){
    try{
        const id = req.params.id
        DeletaLivroPorId(id)
        res.send("Livro Excluído") 
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    DeleteLivro
}
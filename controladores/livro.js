const { getTodosLivros, getLivroPorId } = require("../servicos/livro")


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

module.exports = {
    getLivros,
    getLivro
}
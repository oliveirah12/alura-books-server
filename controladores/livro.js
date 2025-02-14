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
        if(id && Number(id)){
            const livro = getLivroPorId(id)
            res.send(livro)
        } else{
            res.status(422)
            res.send('ID Inválido')
        }
        
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
    
}

function postLivro(req, res){
    try{
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro criado")
        }else{
            req.status(222)
            req.senda("Informações faltantes")
        }
        
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
}

function patchLivro(req, res){
    try{
        const id = req.params.id
        const body = req.body

        if(id && Number(id)){
            ModificaLivro(body, id)
            res.status(200)
            res.send("Item modificado") 
        } else{
            res.status(422)
            res.send('ID Inválido')
        }
        
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
}

function DeleteLivro(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            DeletaLivroPorId(id)
            res.send("Livro Excluído") 
        } else{
            res.status(422)
            res.send('ID Inválido')
        }
        
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
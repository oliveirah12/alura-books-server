const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("./../servicos/favorito")


function getFavoritos(req, res){
    try{
        const livros = getTodosFavoritos()
        res.send(livros)
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
    
}

function postFavorito(req, res){
    try{
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("Favorito adicionado")
        
    }catch(ex){
        res.status(500)
        res.send(ex.message)
    }
}

function deleteFavorito(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            deletaFavoritoPorId(id)
            res.send("Favorito Excluído") 
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
    getFavoritos,
    postFavorito,
    deleteFavorito
}
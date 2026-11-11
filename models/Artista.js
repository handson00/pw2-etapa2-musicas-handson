let artistas = [
    {id: 1, nome: 'Anitta', pais: 'Brasil'},
    {id: 2, nome: 'Marília Mendonça', pais: 'Brasil'},
    {id: 3, nome: 'Luan Santana', pais: 'Brasil'}
]
let proximoId = 4

class Artista{

    listar(){
        return artistas
    }

    buscarPorId(id){
        return artistas.find(a => a.id === id)
    }

    criar(nome, pais){
        const novo = {id: proximoId++, nome, pais}
        artistas.push(novo)
        return novo
    }

    atualizar(id, nome, pais){
        const artista = this.buscarPorId(id)
        if(!artista) return null
        artista.nome = nome
        artista.pais = pais
        return artista
    }

    remover(id){
        const indice = artistas.findIndex(a => a.id === id)
        if(indice === -1) return false
        artistas.splice(indice, 1)
        return true
    }

}

export default new Artista()

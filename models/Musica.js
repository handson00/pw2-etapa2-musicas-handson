let musicas = [
    {id: 1, titulo: 'Envolver', ano: 2021, artistaId: 1},
    {id: 2, titulo: 'Vai Malandra', ano: 2017, artistaId: 1},
    {id: 3, titulo: 'Infiel', ano: 2016, artistaId: 2},
    {id: 4, titulo: 'Supera', ano: 2019, artistaId: 2},
    {id: 5, titulo: 'Meteoro', ano: 2013, artistaId: 3},
    {id: 6, titulo: 'Chuva de Arroz', ano: 2012, artistaId: 3}
]
let proximoId = 7

class Musica{

    listar(ano){
        if(ano === undefined) return musicas
        return musicas.filter(m => m.ano === ano)
    }

    listarPorArtista(artistaId){
        return musicas.filter(m => m.artistaId === artistaId)
    }

    buscarPorId(id){
        return musicas.find(m => m.id === id)
    }

    criar(titulo, ano, artistaId){
        const nova = {id: proximoId++, titulo, ano, artistaId}
        musicas.push(nova)
        return nova
    }

    atualizar(id, titulo, ano, artistaId){
        const musica = this.buscarPorId(id)
        if(!musica) return null
        musica.titulo = titulo
        musica.ano = ano
        musica.artistaId = artistaId
        return musica
    }

    remover(id){
        const indice = musicas.findIndex(m => m.id === id)
        if(indice === -1) return false
        musicas.splice(indice, 1)
        return true
    }

}

export default new Musica()

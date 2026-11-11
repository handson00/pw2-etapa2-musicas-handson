import Musica from '../models/Musica.js'
import Artista from '../models/Artista.js'
import { textoValido, anoValido, converterId } from '../helpers/validacao.js'

class MusicaController{

    salvar = async (req, res) => {
        try{
            const { titulo, ano, artistaId } = req.body ?? {}
            if(!textoValido(titulo))
                return res.status(400).json({message: 'Falta o título!'})
            if(!anoValido(ano))
                return res.status(400).json({message: 'O ano tem que ser um número'})
            if(!Number.isInteger(artistaId))
                return res.status(400).json({message: 'O artistaId tem que ser um número'})
            if(!Artista.buscarPorId(artistaId))
                return res.status(400).json({message: 'Esse artista não existe'})
            Musica.criar(titulo.trim(), ano, artistaId)
            return res.status(201)
                .json({message: 'Música salva!'})
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    listar = async (req, res) => {
        try{
            let ano
            if(req.query.ano !== undefined){
                ano = Number(req.query.ano)
                if(!Number.isInteger(ano))
                    return res.status(400)
                        .json({message: 'O filtro de ano tem que ser um número'})
            }
            const musicas = Musica.listar(ano)
            return res.status(200).json(musicas)
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    buscarPorId = async (req, res) => {
        try{
            const id = converterId(req.params.id)
            if(id === null)
                return res.status(400).json({message: 'ID inválido'})
            const musica = Musica.buscarPorId(id)
            if(!musica)
                return res.status(404).json({message: 'Música não encontrada'})
            return res.status(200).json(musica)
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    editar = async (req, res) => {
        try{
            const id = converterId(req.params.id)
            if(id === null)
                return res.status(400).json({message: 'ID inválido'})
            const { titulo, ano, artistaId } = req.body ?? {}
            if(!textoValido(titulo))
                return res.status(400).json({message: 'Falta o título!'})
            if(!anoValido(ano))
                return res.status(400).json({message: 'O ano tem que ser um número'})
            if(!Number.isInteger(artistaId))
                return res.status(400).json({message: 'O artistaId tem que ser um número'})
            if(!Artista.buscarPorId(artistaId))
                return res.status(400).json({message: 'Esse artista não existe'})
            const musica = Musica.atualizar(id, titulo.trim(), ano, artistaId)
            if(!musica)
                return res.status(404).json({message: 'Música não encontrada'})
            return res.status(200).json({message: 'Música atualizada!'})
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    excluir = async (req, res) => {
        try{
            const id = converterId(req.params.id)
            if(id === null)
                return res.status(400).json({message: 'ID inválido'})
            const removida = Musica.remover(id)
            if(!removida)
                return res.status(404).json({message: 'Música não encontrada'})
            return res.status(200).json({message: 'Música apagada!'})
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

}

export default new MusicaController()

import Artista from '../models/Artista.js'
import Musica from '../models/Musica.js'
import { textoValido, converterId } from '../helpers/validacao.js'

class ArtistaController{

    salvar = async (req, res) => {
        try{
            const { nome, pais } = req.body ?? {}
            if(!textoValido(nome))
                return res.status(400).json({message: 'Falta o nome!'})
            if(!textoValido(pais))
                return res.status(400).json({message: 'Falta o país!'})
            Artista.criar(nome.trim(), pais.trim())
            return res.status(201)
                .json({message: 'Artista salvo!'})
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    listar = async (req, res) => {
        try{
            const artistas = Artista.listar()
            return res.status(200).json(artistas)
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    buscarPorId = async (req, res) => {
        try{
            const id = converterId(req.params.id)
            if(id === null)
                return res.status(400).json({message: 'ID inválido'})
            const artista = Artista.buscarPorId(id)
            if(!artista)
                return res.status(404).json({message: 'Artista não encontrado'})
            return res.status(200).json(artista)
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    editar = async (req, res) => {
        try{
            const id = converterId(req.params.id)
            if(id === null)
                return res.status(400).json({message: 'ID inválido'})
            const { nome, pais } = req.body ?? {}
            if(!textoValido(nome))
                return res.status(400).json({message: 'Falta o nome!'})
            if(!textoValido(pais))
                return res.status(400).json({message: 'Falta o país!'})
            const artista = Artista.atualizar(id, nome.trim(), pais.trim())
            if(!artista)
                return res.status(404).json({message: 'Artista não encontrado'})
            return res.status(200).json({message: 'Artista atualizado!'})
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    excluir = async (req, res) => {
        try{
            const id = converterId(req.params.id)
            if(id === null)
                return res.status(400).json({message: 'ID inválido'})
            const artista = Artista.buscarPorId(id)
            if(!artista)
                return res.status(404).json({message: 'Artista não encontrado'})
            if(Musica.listarPorArtista(id).length > 0)
                return res.status(400)
                    .json({message: 'Esse artista ainda tem músicas, não dá pra apagar'})
            Artista.remover(id)
            return res.status(200).json({message: 'Artista apagado!'})
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

    listarMusicas = async (req, res) => {
        try{
            const id = converterId(req.params.id)
            if(id === null)
                return res.status(400).json({message: 'ID inválido'})
            const artista = Artista.buscarPorId(id)
            if(!artista)
                return res.status(404).json({message: 'Artista não encontrado'})
            const musicas = Musica.listarPorArtista(id)
            return res.status(200).json(musicas)
        }catch(erro){
            return res.status(500).json({message: erro})
        }
    }

}

export default new ArtistaController()

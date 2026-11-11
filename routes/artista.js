import express from 'express'
const router = express.Router()
import ArtistaController from '../controllers/ArtistaController.js'

router.post('/', ArtistaController.salvar)
router.get('/', ArtistaController.listar)
router.get('/:id', ArtistaController.buscarPorId)
router.get('/:id/musicas', ArtistaController.listarMusicas)
router.put('/:id', ArtistaController.editar)
router.delete('/:id', ArtistaController.excluir)

export default router

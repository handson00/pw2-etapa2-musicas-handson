import express from 'express'
const router = express.Router()
import MusicaController from '../controllers/MusicaController.js'

router.post('/', MusicaController.salvar)
router.get('/', MusicaController.listar)
router.get('/:id', MusicaController.buscarPorId)
router.put('/:id', MusicaController.editar)
router.delete('/:id', MusicaController.excluir)

export default router

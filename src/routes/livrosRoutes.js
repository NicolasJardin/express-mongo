import express from 'express'
import LivroController from '../controllers/livroController.js'

const routes = express.Router()

routes.route('/livros').get(LivroController.listarLivros).post(LivroController.cadastrarLivro)

routes
  .route('/livros/:id')
  .get(LivroController.listarLivroPorId)
  .put(LivroController.atualizarLivro)
  .delete(LivroController.deletarLivro)

export default routes

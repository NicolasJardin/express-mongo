import express from 'express'
import AutorController from '../controllers/autorController.js'

const routes = express.Router()

routes.route('/autores').get(AutorController.listarAutores).post(AutorController.cadastrarAutor)

routes
  .route('/autores/:id')
  .get(AutorController.listarAutorPorId)
  .put(AutorController.atualizarAutor)
  .delete(AutorController.deletarAutor)

export default routes

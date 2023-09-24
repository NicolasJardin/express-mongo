import express from 'express'
import connectDatabase from './config/dbConnect.js'
import routes from './routes/index.js'

const connection = await connectDatabase()

connection.on('error', erro => {
  console.error('Erro de conexão', { erro })
})

connection.once('open', () => {
  console.log('Conexão feita com sucesso!')
})

const app = express()
routes(app)

app.delete('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id)
  livros = livros.filter(livro => livro.id !== Number(req.params.id))
  // livros.slice(index, 1)
  console.log({ livros })
  res.status(200).send(livros)
})

export default app

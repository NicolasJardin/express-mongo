import { autor } from '../models/Autor.js'
import livro from '../models/Livro.js'

class LivroController {
  static async listarLivros(req, res) {
    try {
      const editora = req.query.editora

      let listaLivros = []

      if (editora) listaLivros = await livro.find({ editora })
      else listaLivros = await livro.find({})

      res.status(200).send(listaLivros)
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao listar livros` })
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id
      const listarLivro = await livro.findById(id)
      res.status(200).send(listarLivro)
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição livro` })
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor)
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
      const livroCriado = await livro.create(livroCompleto)
      res.status(201).json({ message: 'Criado com sucesso!', livro: livroCriado })
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id
      await livro.findByIdAndUpdate(id, req.body)
      res.status(201).json({ message: 'Atualizado com sucesso!' })
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao editar livro` })
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id
      await livro.findByIdAndDelete(id)
      res.status(201).json({ message: 'Deletado com sucesso!' })
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao deletar livro` })
    }
  }
}

export default LivroController

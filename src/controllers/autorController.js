import { autor } from '../models/Autor.js'

class AutorController {
  static async listarAutores(req, res) {
    try {
      const autores = await autor.find({})
      res.status(200).send(autores)
    } catch (e) {
      res.status(500).json({ message: `${erro.message} - falha ao listar autores` })
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id
      const listarAutor = autor.findById(id)
      res.status(200).json(listarAutor)
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` })
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body)
      res.status(201).json({ message: 'Criado com sucesso!', autor: novoAutor })
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` })
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id
      await autor.findByIdAndUpdate(id, req.body)
      res.status(201).json({ message: 'Atualizado com sucesso!' })
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao editar autor` })
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id
      await autor.findByIdAndDelete(id)
      res.status(201).json({ message: 'Deletado com sucesso!' })
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao deletar autor` })
    }
  }

  // static async cadastrarLivro(req, res) {
  //   try {
  //     const novoLivro = await livro.create(req.body)
  //     res.status(201).json({ message: 'Criado com sucesso!', livro: novoLivro })
  //   } catch (erro) {
  //     res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
  //   }
  // }

  // static async atualizarLivro(req, res) {
  //   try {
  //     const id = req.params.id
  //     await livro.findByIdAndUpdate(id, req.body)
  //     res.status(201).json({ message: 'Atualizado com sucesso!' })
  //   } catch (erro) {
  //     res.status(500).json({ message: `${erro.message} - falha ao editar livro` })
  //   }
  // }

  // static async deletarLivro(req, res) {
  //   try {
  //     const id = req.params.id
  //     await livro.findByIdAndDelete(id)
  //     res.status(201).json({ message: 'Deletado com sucesso!' })
  //   } catch (erro) {
  //     res.status(500).json({ message: `${erro.message} - falha ao deletar livro` })
  //   }
  // }
}

export default AutorController

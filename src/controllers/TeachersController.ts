import { Request, response, Response } from 'express'
import { TeachersServices } from '../services/TeachersServices'

class TeachersController {

  async create(request: Request, response: Response) {
    const { disciplina, professor, diasemana, periodo, horario } = request.body

    const teachersServices = new TeachersServices()

    try {
      const teachers = await teachersServices.create({ disciplina, professor, diasemana, periodo, horario })
      return response.json(teachers)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const teachersServices = new TeachersServices()

    try {
      const teachers = await teachersServices.index()
      return response.json(teachers)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const teachersServices = new TeachersServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const teachers = await teachersServices.show({ id })
      return response.json(teachers)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const teachersServices = new TeachersServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const teachers = await teachersServices.delete({ id })
      return response.json({ message: 'Teacher id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { disciplina, professor, diasemana, periodo, horario } = request.body
    const { id } = request.params

    const teachersServices = new TeachersServices()

    try {
      const teachers = await teachersServices.update({ id, disciplina, professor, diasemana, periodo, horario })
      return response.json(teachers)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { TeachersController }


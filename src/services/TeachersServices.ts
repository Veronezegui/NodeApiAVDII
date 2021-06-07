import { getCustomRepository } from 'typeorm'
import { TeachersRepository } from '../repositories/TeachersRepository'

interface ITeachersCreate {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
}

interface ITeachersShow {
  id: string
}


interface ITeachersUpdate {
  id: string;
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
}

class TeachersServices {

  async create({ disciplina, professor, diasemana, periodo, horario }: ITeachersCreate) {

    const teachersRepository = getCustomRepository(TeachersRepository)

    const teachers = teachersRepository.create({
      disciplina,
      professor,
      diasemana,
      periodo,
      horario
    })

    await teachersRepository.save(teachers)

    return teachers
  }

  async index() {
    const teachersRepository = getCustomRepository(TeachersRepository)

    const teachers = await teachersRepository.find()

    return teachers;
  }

  //async show({ id: string }) {
  async show({ id }: ITeachersShow) {
    const teachersRepository = getCustomRepository(TeachersRepository)

    const teachers = await teachersRepository.findOne({ id })

    console.log(teachers)

    if (!teachers) {
      throw new Error('User id not found!!')
    }

    return teachers;
  }

  async delete({ id }: ITeachersShow) {
    const teachersRepository = getCustomRepository(TeachersRepository)

    const teachers = await teachersRepository.findOne({ id })

    if (!teachers) {
      throw new Error('User id not found!!')
    }

    return await teachersRepository.delete({ id })
  }

  async update({ id, disciplina, professor, diasemana, periodo, horario }: ITeachersUpdate) {
    const teachersRepository = getCustomRepository(TeachersRepository)

    let teachers = await teachersRepository.findOne({ id })

    if (!teachers) {
      throw new Error('Teacher id not found!!')
    }

    await teachersRepository.update(
      { id},
      { disciplina,
      professor,
      diasemana,
      periodo,
      horario }
    )

    const teacherUpdated = await teachersRepository.findOne({ id })

    return teacherUpdated
  }
}

export { TeachersServices }
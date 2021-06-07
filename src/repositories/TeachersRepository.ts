import { Repository, EntityRepository } from 'typeorm'
import { Teacher } from '../entities/Teacher'

@EntityRepository(Teacher)
class TeachersRepository extends Repository<Teacher> {

}

export { TeachersRepository }


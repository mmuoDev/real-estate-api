import { CRUD } from '../../commons/interfaces/crud'
import { CreateDTO } from '../dto/user.dto'
import userDao from '../daos/user.dao'

class UsersService implements CRUD {
  async create (resource: CreateDTO) {
    return userDao.addUser(resource);
  }
}

export default new UsersService();
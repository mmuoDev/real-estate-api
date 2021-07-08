import mongooseService from "../../commons/services/mongoose.service";
import { CreateDTO } from "../dto/user.dto";
import shortid from 'shortid';

class UsersDAO {
  Schema = mongooseService.getMongoose().Schema;

  userSchema = new this.Schema({
      _id: String,
      email: String,
      password: { type: String, select: false },
      firstName: String,
      lastName: String,
      permissionFlags: Number,
  }, { id: false });

  User = mongooseService.getMongoose().model('Users', this.userSchema);

  //addUser adds a user
  async addUser(fields: CreateDTO) {
    const userId = shortid.generate();
    const user = new this.User({
      _id: userId,
      ...fields,
    })

    await user.save();
    return user
  }
}

export default new UsersDAO();
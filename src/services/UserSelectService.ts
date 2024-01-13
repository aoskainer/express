import { UserSelectForm } from "../forms"
import { UserRepository } from "../repositories"

class UserSelectService {

  async execute(form: UserSelectForm) {
    const { id } = form;
    const userRepository = new UserRepository();
    const user = await userRepository.findById(id);
    return user;
  }
}

export default UserSelectService;

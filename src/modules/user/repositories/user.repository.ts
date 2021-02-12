import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
  async getAllUsers() {
    const users = await this.find();
    return users;
  }

  async createUser(userDto: UserDto) {
    const user = this.create(userDto);
    const createdUser = await this.save(user);
    return createdUser;
  }

  async getUserByEmail(email: string) {
    const user = await this.findOneOrFail({ email });
    return user;
  }
}

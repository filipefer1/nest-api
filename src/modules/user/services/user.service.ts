import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  async createUser(userDto: UserDto) {
    return this.userRepository.createUser(userDto);
  }

  async getUserByEmail(email: string) {
    return this.userRepository.getUserByEmail(email);
  }
}

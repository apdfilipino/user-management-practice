import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RepoService } from 'src/services/repo/repo.service';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {

  constructor(private repoService: RepoService){}

  create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: uuidv4()
    }
    this.repoService.writeToRepo<User>(newUser);
    return newUser;
  }

  findAll() {
    const repo = this.repoService.getRepo<User>();
    return repo;
  }

  findOne(id: string) {
    const user = this.repoService.getRepo<User>().find(u => u.id === id);
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) {
      throw new Error("User not found");
    }
    const updatedUser: User = {
      ...user,
      ...updateUserDto
    }
    this.repoService.replaceItem<User>(id, updatedUser);
    return updatedUser;
  }

  remove(id: string) {
    this.repoService.removeItem<User>(id);
  }
}

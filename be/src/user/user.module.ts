import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RepoService } from 'src/services/repo/repo.service';

@Module({
  controllers: [UserController],
  providers: [UserService, RepoService],
})
export class UserModule {}

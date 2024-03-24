import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './model/author.model';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
})
export class AuthorModule {}

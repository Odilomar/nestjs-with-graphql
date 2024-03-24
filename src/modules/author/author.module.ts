import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entity/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
})
export class AuthorModule {}

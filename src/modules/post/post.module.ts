import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './model/post.model';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
})
export class PostModule {}

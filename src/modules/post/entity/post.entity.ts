import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../../author/entity/author.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ type: 'int' })
  votes: number;

  @ManyToOne(() => Author, (author) => author.posts, { nullable: true })
  author?: Author;
}

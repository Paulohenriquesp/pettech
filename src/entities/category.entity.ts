import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ICategory } from './models/category.interface'

@Entity({
  name: 'Category',
})
export class Category implements ICategory {
  @PrimaryGeneratedColumn('increment', {
    name: 'id',
  })
  id?: number | undefined

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string

  @Column({
    name: 'create_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date
}

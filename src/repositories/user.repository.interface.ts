import { IPerson } from '@/entities/models/person.interface'
import { IUser } from '@/entities/models/user.interface'

export interface IUserRepository {
  findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined>
  findByUserName(userName: string): Promise<IUser | undefined>
  create(user: IUser): Promise<IUser | undefined>
}

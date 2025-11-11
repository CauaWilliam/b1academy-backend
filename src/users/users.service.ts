import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/db/drizzle/drizzle.provider';
import * as schema from '../db/schemas/index'
import * as bcrypt from 'bcrypt'
import { UserCreateDto } from './dto/user.create.dto';
import {usersTable} from '../db/schemas/users.schema'
import {eq} from "drizzle-orm"
import { randomUUID } from 'crypto'

@Injectable()
export class UsersService {
     constructor(@Inject(DrizzleAsyncProvider) private db: NodePgDatabase<typeof schema>){}

     private async hashString(str: string): Promise<string>{
          const saltRounds = 10;
          return await bcrypt.hash(str , saltRounds);
     }

     async create(data: UserCreateDto){
        const existingUser = await this.db.select().from(usersTable).where(eq(usersTable.email , data.email)).limit(1)  
        if(existingUser.length){
            throw new ForbiddenException(`email ja cadastrado`)
        }

        const hashed = await this.hashString(data.password)
        const[user] = await this.db.insert(usersTable).values({
            id: randomUUID(),
            name: data.name,
            email: data.email,
            password: hashed,
            whitelabel: data.whitelabel,
            qtdTreinamentos: data.qtdTreinamentos
        }).returning()

        return user;
    }

    async findByEmail(email:string){
        const [user] = await this.db.select().from(usersTable).where(eq(usersTable.email , email)).limit(1)  
        return user
    }
}

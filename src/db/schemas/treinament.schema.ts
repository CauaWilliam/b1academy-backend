import { varchar } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
import { uuid } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";




export const treinamentTable = pgTable('treinament' , {
    id: uuid('id').notNull().primaryKey(),
    nome: varchar('nome' , {length: 100}).notNull().unique(),
    qttStudent: integer('qttStudent').default(0),

    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('created_at').notNull().defaultNow()
})
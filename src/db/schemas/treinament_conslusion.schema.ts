import { uuid } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { usersTable } from "./users.schema";
import { treinamentTable } from "./treinament.schema";




export const treinamentConclusionTable = pgTable('treinamentConclusion' , {
    id: uuid('id').notNull().primaryKey(),
    userId: uuid('userId').references(() => usersTable.id).notNull(),
    treinamentId: uuid('treinamentId').references(() => treinamentTable.id).notNull(),
})
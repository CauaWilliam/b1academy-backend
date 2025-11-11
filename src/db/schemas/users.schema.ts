import { varchar } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { pgEnum } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
import { uuid } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";


export const whitelabelEnum = pgEnum('whitelabel' , ['B1BANK' , 'WhiteLabel']);

export const usersTable = pgTable('users' , {
    id: uuid('id').primaryKey().notNull(),
    name: varchar('name' , {length:255}).notNull(),
    qtdTreinamentos: integer('qtdTreinamentos').notNull().default(0),
    whitelabel: whitelabelEnum('whitelabel').notNull(),
    email: varchar('email' , {length:255}).notNull().unique(),
    password: varchar('password' , {length: 255}).notNull(),

    created_at:timestamp().notNull().defaultNow(),
    updated_at:timestamp().notNull().defaultNow(),
});
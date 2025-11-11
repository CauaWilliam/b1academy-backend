CREATE TYPE "public"."whitelabel" AS ENUM('B1BANK', 'WhiteLabel');--> statement-breakpoint
CREATE TABLE "treinamentConclusion" (
	"id" uuid PRIMARY KEY NOT NULL,
	"userId" uuid NOT NULL,
	"treinamentId" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "treinament" (
	"id" uuid PRIMARY KEY NOT NULL,
	"nome" varchar(100) NOT NULL,
	"qttStudent" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "treinament_nome_unique" UNIQUE("nome")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"qtdTreinamentos" integer DEFAULT 0 NOT NULL,
	"whitelabel" "whitelabel" NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "treinamentConclusion" ADD CONSTRAINT "treinamentConclusion_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "treinamentConclusion" ADD CONSTRAINT "treinamentConclusion_treinamentId_treinament_id_fk" FOREIGN KEY ("treinamentId") REFERENCES "public"."treinament"("id") ON DELETE no action ON UPDATE no action;
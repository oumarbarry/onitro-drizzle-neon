import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core"

export const movies = pgTable("movies", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 50 }).notNull(),
  description: text("description"),
})

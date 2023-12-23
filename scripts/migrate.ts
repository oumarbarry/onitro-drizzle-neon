import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"

const client = postgres(process.env.DIRECT_URL, { max: 1 })
const db = drizzle(client)

console.log("Migration started...")

await migrate(db, { migrationsFolder: "migrations" })

console.log("Migration done.")

process.exit(0)

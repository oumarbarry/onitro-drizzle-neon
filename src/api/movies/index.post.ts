import { createInsertSchema } from "drizzle-zod"

const insertMovieSchema = createInsertSchema(movies, {
  title: schema => schema.title.max(50),
  description: schema => schema.description.max(500),
})

export default defineEventHandler(async (event) => {
  const { title, description } = await readValidatedBody(event, insertMovieSchema.parse)

  try {
    const movie = (await db.insert(movies).values({ title, description }).returning())[0]

    setResponseStatus(event, 201, "Created successfully.")

    return movie
  }
  catch { throw createError({ statusCode: 500, statusMessage: "Something went wrong." }) }
})

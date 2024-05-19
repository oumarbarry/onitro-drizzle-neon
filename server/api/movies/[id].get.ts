import { eq } from "drizzle-orm"

export default defineEventHandler(async (event) => {
  const { id } = await getValidatedRouterParams(event, z.object({ id: z.string().length(36) }).parse)

  const movie = await db.query.movies.findFirst({ where: eq(movies.id, id) })

  if (!movie)
    throw createError({ statusCode: 400, statusMessage: "Movie not found." })

  return movie
})

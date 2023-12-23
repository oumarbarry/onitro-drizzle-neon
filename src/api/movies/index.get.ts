export default defineEventHandler(async () => {
  try {
    return await db.select().from(movies)
  }
  catch { throw createError({ statusCode: 500, statusMessage: "Something went wrong." }) }
})

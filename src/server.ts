import Fastify from 'fastify'
import drizzle from './plugins/drizzle'
import { db } from './db'
import { usersTable } from './db/schema'
import routes from './routes/route'

//@ts-ignore
const fastify = Fastify({
  logger: true
})

fastify.register(routes)
fastify.register(drizzle)
// fastify.data

// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })

// fastify.get('/users', async (request, reply) => {
//   const users = await db.select().from(usersTable) // Доступ к Drizzle через request.db

//   console.log('Getting all users from the database: ', users)

//   return users;
// });

/**
 * Run the server!
 */
const start = async () => {
  try {
    fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
      if (err) {
        fastify.log.error(err)
        process.exit(1)
      }
      fastify.log.info(`server listening on ${address}`)
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
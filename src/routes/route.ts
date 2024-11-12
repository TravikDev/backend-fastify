import { FastifyInstance } from "fastify";

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify: FastifyInstance, options: object) {
    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get('/users', async (request, reply) => {
        // const users = await request.server.db.select().from('users');
        // return users;

        console.log('request: ', request)
        console.log('reply: ', reply)
        return { 'hello': 'world' }
    });
}

//ESM
export default routes;
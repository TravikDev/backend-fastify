import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import { db } from '../db';

async function drizzlePlugin(fastify: FastifyInstance) {
    fastify.decorate('db', db);

    fastify.addHook('onClose', async (instance, done) => {
        //@ts-ignore
        await db.dispose();
        done();
    });
}

export default fp(drizzlePlugin,
    // {
    //     name: 'my-encapsulated-drizzle-plugin',
    //     fastify: '5.x',
    //     decorators: {
    //         fastify: ['plugin1', 'plugin2'],
    //         reply: ['compress']
    //     },
    //     dependencies: ['plugin1-name', 'plugin2-name'],
    //     encapsulate: true
    // }
);
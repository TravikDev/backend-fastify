'use strict'

import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import { db } from '../db';

function drizzlePlugin(fastify: FastifyInstance, options: any, done: any) {
	if (!fastify.drizzle) {
		const drizzle = db(options)
		fastify.decorate('drizzle', drizzle);

		fastify.addHook('onClose', (fastify: FastifyInstance, done) => {
			if (fastify.drizzle === drizzle) {
				fastify.drizzle.destroy(done)
			}
		});
	}

	done();
}

export default fp(drizzlePlugin, { name: 'fastify-drizzle-plugin' }
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
// import { Drizzle } from 'drizzle-orm/node-postgres';

declare module 'fastify' {
    interface FastifyInstance {
        get(arg0: string, arg1: (request: any, reply: any) => Promise<{ hello: string; }>): unknown;
        addHook(arg0: string, arg1: (instance: any, done: any) => Promise<void>): unknown;
        decorate(arg0: string, db: import("drizzle-orm/node-postgres").NodePgDatabase<Record<string, never>> & { $client: import("pg").Pool; }): unknown;
        db: any;
    }
}
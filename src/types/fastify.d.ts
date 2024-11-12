declare module 'fastify' {
    interface FastifyInstance {
        get(arg0: string, arg1: (request: any, reply: any) => Promise<{ hello: string; }>): unknown;
        addHook(arg0: string, arg1: (fastify: FastifyInstance, done: any) => void): unknown;
        decorate(arg0: string, db: import("drizzle-orm/node-postgres").NodePgDatabase<Record<string, never>> & { $client: import("pg").Pool; }): unknown;
        db: any;
        drizzle: any;
    }
}
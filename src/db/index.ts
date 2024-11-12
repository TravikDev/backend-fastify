import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg'

const { Pool } = pg

// export const db = drizzle({
//     connection: {
//         connectionString: process.env.DATABASE_URL!,
//         ssl: true
//     }
// });

// import 'dotenv/config';
// import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
    ssl: false,
});
export const db = (options: any) => drizzle({ client: pool });

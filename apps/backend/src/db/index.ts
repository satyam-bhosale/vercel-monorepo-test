import { neon } from "@neondatabase/serverless";
import { configDotenv } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.VERCEL) {
    configDotenv({ path: ".env" })
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

export default db;
import { configDotenv } from "dotenv";
import { defineConfig } from "drizzle-kit";

configDotenv({ path: ".env.local" });

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schemas/**/*.ts",
    out: "./src/db/migrations/",
    dbCredentials: {
        url: process.env.DATABASE_MIGRATION_URL!
    }
});
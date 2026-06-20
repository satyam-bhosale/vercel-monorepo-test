import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { configDotenv } from "dotenv";
import db from "../db/index.js";
import { account, session, user, verification } from "../db/schemas/auth.js";

if(!process.env.VERCEL){
    configDotenv({path: ".env"})
}

const auth = betterAuth({
    baseURL: {
        allowedHosts: ["vercel-monorepo-test-backend-*.vercel.app"],
        protocol: "https"
    },
    secret: process.env.BETTER_AUTH_SECRET!,
    basePath: "/auth",
    database: drizzleAdapter(db,{
        provider: 'pg',
        schema: {user, verification, session, account}
    }),
    emailAndPassword:{
        enabled: true,
        requireEmailVerification: false,
    },
    trustedOrigins: ["http://localhost:3001"]
});

export default auth;
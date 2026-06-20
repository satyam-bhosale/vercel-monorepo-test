import db from "@axcelero/backend/db/index.js";
import { account, session, user, verification } from "@axcelero/backend/db/schemas/auth.js";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

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
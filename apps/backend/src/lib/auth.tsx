import db from "@axcelero/backend/db/index.js";
import { account, session, user, verification } from "@axcelero/backend/db/schemas/auth.js";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

const auth = betterAuth({
    baseURL: {
        allowedHosts: ["vercel-monorepo-test-backend-*.vercel.app"]
    },
    basePath: "/auth",
    database: drizzleAdapter(db,{
        provider: 'pg',
        schema: {user, verification, session, account}
    }),
    emailAndPassword:{
        enabled: true,
        requireEmailVerification: false,
    }
});

export default auth;
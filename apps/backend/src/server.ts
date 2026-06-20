import app from "@axcelero/backend/app.js";
import { serve } from "@hono/node-server";
import { configDotenv } from "dotenv";

if(!process.env.VERCEL){
    configDotenv({path: ".env"})
}

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT!),
})
import auth from "@axcelero/backend/lib/auth.js";
import { toTitleCase } from "@axcelero/utils";
import { hash } from "argon2";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
    "/api/auth/*", // or replace with "*" to enable cors for all routes
    cors({
        origin: "http://localhost:3001", // replace with your origin
        allowHeaders: ["Content-Type", "Authorization"],
        allowMethods: ["POST", "GET", "OPTIONS"],
        exposeHeaders: ["Content-Length"],
        maxAge: 600,
        credentials: true,
    }),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => {
    return auth.handler(c.req.raw);
});

app.get('/', (c) => {
    return c.text(toTitleCase("Hello Hono!"));
});

app.get('/users', async (c) => {
    async function hashSample() {
        const result = await hash("satyam");
        return result;
    }

    const result = await hashSample();
    return c.text(toTitleCase(`Hello Books! ${result}`));
});

export default app;
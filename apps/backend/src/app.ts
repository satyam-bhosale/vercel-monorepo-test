import { toTitleCase } from "@axcelero/utils";
import { hash } from "argon2";
import { Hono } from "hono";
import { cors } from "hono/cors";
import auth from "./lib/auth.js";

const app = new Hono();

app.use(
	"/auth/*",
	cors({
		origin: "http://localhost:3001",
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	}),
);

app.on(["POST", "GET"], "/auth/*", (c) => {
	return auth.handler(c.req.raw);
});

app.get('/', (c) => {
    return c.text(toTitleCase("Hello Hono!"));
});

app.get('/users', async (c) => {
    async function hashSample(){
        const result = await hash("satyam");
        return result;
    }

    const result = await hashSample();
    return c.text(toTitleCase(`Hello Books! ${result}`));
});

export default app;
import { toTitleCase } from "@axcelero/utils";
import { hash } from "argon2";
import { Hono } from "hono";

const app = new Hono();

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
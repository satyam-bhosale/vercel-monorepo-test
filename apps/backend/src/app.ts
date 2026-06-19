import { toTitleCase } from "@axcelero/utils";
import { Hono } from "hono";

const app = new Hono();

app.get('/', (c) => {
    return c.text(toTitleCase("Hello Hono!"));
});

app.get('/users', (c) => {
    return c.text(toTitleCase("Hello Books!"));
});

export default app;
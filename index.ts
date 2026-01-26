import $ from 'bun'
import homepage from "./index.html";

Bun.serve({
  port: 3000,
  routes: {
    "/": homepage,
    "/api/hello": () => Response.json({ message: "Hello!" }),
  },
});
console.log("Hello via Bun!");
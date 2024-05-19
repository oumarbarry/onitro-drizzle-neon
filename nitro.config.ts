export default defineNitroConfig({
  srcDir: "server",

  routeRules: {
    "/api/**": { cors: true },
  },

  imports: {
    dirs: ["./server/db/**"],

    imports: [
      { from: "zod", name: "z" },
    ],
  },
})

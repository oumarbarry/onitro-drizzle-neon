export default defineNitroConfig({
  srcDir: "src",

  routeRules: {
    "/api/**": { cors: true },
  },

  imports: {
    dirs: ["./src/db/**"],
    imports: [
      { from: "zod", name: "z" },
    ],
  },
})

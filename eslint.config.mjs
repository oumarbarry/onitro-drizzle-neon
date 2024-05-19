import antfu from "@antfu/eslint-config"

export default antfu({
  stylistic: { quotes: "double" },

  rules: {
    "no-console": 0,
    "node/prefer-global/process": 0,
  },
})

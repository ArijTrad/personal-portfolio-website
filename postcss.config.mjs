export default {
  plugins: {
    '@tailwindcss/postcss': {  // ❌ Wrong plugin name
      tailwindcss: {},         // ❌ Nested incorrectly
      autoprefixer: {},        // ❌ Nested incorrectly
    },
  },
};
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};













/*

Option 2: Switch to proper Tailwind v4 config (After reinstalling)

// postcss.config.mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

*/
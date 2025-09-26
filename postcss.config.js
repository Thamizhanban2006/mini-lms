// postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ This is required in Tailwind v4
    autoprefixer: {},
  },
};

const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: false,
    // in the content prop you should put all the files
    // that are using tailwindcss classes, for example:
    // content: ["./src/**/*.js", "./public/index.html"],
    // or
    // content: ["./src/**/*.vue", "./public/index.html"],
    // or
    // content: ["./src/**/*.jsx", "./public/index.html"],
    content: [],
    options: {
      safelist: [],
    },
  },
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      "current": "current",
      "transparent": "transparent",
    },
    extend: {
      backgroundImage: theme => ({
        'site-background': "url('./assets/images/smiths-background.jpeg')"
      })
    }
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [],
};

// module.exports = {
//   purge: ['./**/*.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }


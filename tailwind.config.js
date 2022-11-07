module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "theme-menu-text-color": "var(--theme-menu-text-color)",
      "theme-default-text-color": "var(--theme-default-text-color)",
      "theme-primary-heading-text-color":
        "var(--theme-primary-heading-text-color)",
      "theme-secondary-heading-text-color":
        "var(--theme-secondary-heading-text-color)",
      "theme-default-border-color": "var(--theme-default-border-color)",
      "theme-link-text-color": "var(--theme-link-text-color)",
      "theme-primary-bg-color": "var(--theme-primary-bg-color)",
      "theme-primary-icon-color": "var(--theme-primary-icon-color)",
      "theme-default-border-color": "var(--theme-default-border-color)",
      "theme-default-bg-color": "var(--theme-default-bg-color)",
      "theme-default-heading-text-color":
        "var(--theme-default-heading-text-color)",
      "theme-primary-button-color": "var(--theme-primary-button-color)",
      "theme-primary-button-text-color":
        "var(--theme-primary-button-text-color)",
      "theme-secondary-button-color": "var(--theme-secondary-button-color)",
      "theme-secondary-button-text-color":
        "var(--theme-secondary-button-text-color)",
      "theme-icon-bg-color": "var(--theme-icon-bg-color)",
      "theme-default-icon-color": "var(--theme-default-icon-color)",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};

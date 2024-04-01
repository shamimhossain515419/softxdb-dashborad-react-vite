/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        blue: {
          base: `var(--color-blue-base)`,
          muted: `var(--color-blue-muted)`,
        },
        white: {
          base: `var(--color-white-base)`,
          muted: `var(--color-white-muted)`,
        },
        active: {
          base: `var(--color-active-base)`,
          muted: `var(--color-active-muted)`,
        },
        red: {
          base: `var(--color-red-base)`,
          muted: `var(--color-red-muted)`,
        },
        purple: {
          base: `var(--color-purple-base)`,
          muted: `var(--color-purple-muted)`,
        },
      },
      backgroundColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        blue: {
          base: `var(--color-blue-base)`,
          muted: `var(--color-blue-muted)`,
        },
        white: {
          base: `var(--color-white-base)`,
          muted: `var(--color-white-muted)`,
        },
        active: {
          base: `var(--color-active-base)`,
          muted: `var(--color-active-muted)`,
        },
        red: {
          base: `var(--color-red-base)`,
          muted: `var(--color-red-muted)`,
        },
        purple: {
          base: `var(--color-purple-base)`,
          muted: `var(--color-purple-muted)`,
        },
      },
      borderColor: {
        blue: {
          base: `var(--color-blue-base)`,
          muted: `var(--color-blue-muted)`,
        },
      },
    },
  },
  plugins: [],
}
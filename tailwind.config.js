/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      'primary': '#01ecfc',
      'secondary': '#051635',
      'tertiary': '#18295b',
      'success': '#28A745',
      'danger': '#DC3545',
      'warning': '#FFC107',
      'info': '#17A2B8',
      'light': '#F8F9FA',
    },
  },
  plugins: [],
}
}

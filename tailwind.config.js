module.exports = {
      content: [
        "./index.html",
        "./about.html",
        "./contact.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'deteryaj-blue': '#2563eb',
            'deteryaj-dark': '#111827',
            'deteryaj-light': '#f3f4f6',
            'deteryaj-card-front': '#ffffff',
            'deteryaj-card-back': '#e2e8f0',
          },
          fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }

import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [{
      mytheme: {
        
        "primary": "#7ec242",
        "secondary": "#ffffff",
        ".btn-primary": {
            "background-color": "#7ec242",
            "padding":"4px 28px",
            "border-radius":"50px",
            "font-weight":"light",
          },
        ".btn-primary:hover": {
            "background-color": "#a3cf66",
            "cursor":"pointer",
          },
          ".btn-secondary": {
            "background-color": "#ffffff",
            "border":"2px solid #7ec242",
            "padding":"4px 20px",
            "border-radius":"50px",
            "font-weight":"light",
            "color":"#7ec242"
          },
          ".btn-secondary:hover": {
            "background-color": "#7ec242",
            "color":"#ffffff",
            "cursor":"pointer",
          },
      },
    },"black"],
    darkMode: ['class', '[data-theme="night"]']
  },
}
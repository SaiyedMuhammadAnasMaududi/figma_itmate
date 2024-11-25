import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { screens:{
     'xs': {min:'160px', max: '290px'}
    }
      ,colors: {
        background: "#EBFEFF",
        aboutcolor: "#62696a",
        imgback: " #457B9D",
        explorecolor: "#daf1f5",
        cvbCK: "#457b9d",
        abouttext:" #455A64",
        hieveryone: "#457B9D",
        projectcolor:"#868686",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

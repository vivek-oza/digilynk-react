/** @type {import('tailwindcss').Config} */
import tailwindAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/index.css",
    "./node_modules/@heroui/theme/dist/components/(button|input|ripple|spinner|form).js",
  ],
  safelist: [
    "animate-marquee",
    "animate-marquee-vertical",
    "group-hover:[animation-play-state:paused]",
    "[animation-direction:reverse]",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
        "marquee-vertical": "marquee-vertical 20s linear infinite",
        "marquee-vertical-reverse":
          "marquee-vertical-reverse 20s linear infinite",
        "caret-blink": "caret-blink 1.2s ease-out infinite",
        rainbow: "rainbow 2s linear infinite",
        borderGlow: "borderGlow 3s infinite linear",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        "marquee-vertical-reverse": {
          from: { transform: "translateY(-50%)" },
          to: { transform: "translateY(0)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        borderGlow: {
          "0%, 100%": {
            "border-image-source": "linear-gradient(90deg, #ff7eb3, #ff758c)",
          },
          "50%": {
            "border-image-source": "linear-gradient(90deg, #6a11cb, #2575fc)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bree: ["Bree Serif", "serif"],
        zilla: ["Zilla Slab", "serif"],
      },
    },
  },
  plugins: [
    tailwindAnimate,
    typography,
    function ({ addVariant }) {
      addVariant("group-hover", ":merge(.group):hover &");
    },
  ],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ["class"],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./src/index.css",
//     "./node_modules/@heroui/theme/dist/components/(button|input|ripple|spinner|form).js",
//   ],
//   safelist: [
//     "animate-marquee",
//     "animate-marquee-vertical",
//     "group-hover:[animation-play-state:paused]",
//     "[animation-direction:reverse]",
//     "animate-marquee",
//     "animate-marquee-vertical",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         marquee: "marquee 20s linear infinite",
//         "marquee-reverse": "marquee-reverse 20s linear infinite",
//         "marquee-vertical": "marquee-vertical 20s linear infinite",
//         "marquee-vertical-reverse":
//           "marquee-vertical-reverse 20s linear infinite",
//         "caret-blink": "caret-blink 10s ease-in-out infinite",
//         rainbow: "rainbow 2s linear infinite",
//         borderGlow: "borderGlow 3s infinite linear",
//       },
//       keyframes: {
//         marquee: {
//           from: { transform: "translateX(0%)" },
//           to: { transform: "translateX(-50%)" },
//         },
//         "marquee-reverse": {
//           from: { transform: "translateX(-50%)" },
//           to: { transform: "translateX(0%)" },
//         },
//         "marquee-vertical": {
//           from: { transform: "translateY(0%)" },
//           to: { transform: "translateY(-50%)" },
//         },
//         "marquee-vertical-reverse": {
//           from: { transform: "translateY(-50%)" },
//           to: { transform: "translateY(0%)" },
//         },
//         "caret-blink": {
//           "0%,70%,100%": { opacity: "1" },
//           "20%,50%": { opacity: "0" },
//         },
//         "scroll-horizontal": {
//           "0%,70%,100%": { opacity: "1" },
//           "20%,50%": { opacity: "0" },
//         },
//         rainbow: {
//           "0%": { "background-position": "0%" },
//           "100%": { "background-position": "200%" },
//         },
//         borderGlow: {
//           "0%, 100%": {
//             borderImageSource: "linear-gradient(90deg, #ff7eb3, #ff758c)",
//           },
//           "50%": {
//             borderImageSource: "linear-gradient(90deg, #6a11cb, #2575fc)",
//           },
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       colors: {
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           1: "hsl(var(--chart-1))",
//           2: "hsl(var(--chart-2))",
//           3: "hsl(var(--chart-3))",
//           4: "hsl(var(--chart-4))",
//           5: "hsl(var(--chart-5))",
//         },
//         "color-1": "hsl(var(--color-1))",
//         "color-2": "hsl(var(--color-2))",
//         "color-3": "hsl(var(--color-3))",
//         "color-4": "hsl(var(--color-4))",
//         "color-5": "hsl(var(--color-5))",
//       },
//       fontFamily: {
//         poppins: "Poppins",
//         bree: "Bree Serif",
//         zilla: "Zilla Slab",
//       },
//     },
//   },
//   plugins: [
//     require("tailwindcss-animate"),
//     require("@tailwindcss/typography"),
//     require("tailwindcss/plugin")(function ({ addVariant }) {
//       addVariant("group-hover", ":merge(.group):hover &");
//     }),
//   ],
// };

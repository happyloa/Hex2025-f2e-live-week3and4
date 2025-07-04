import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#F5FEE7",
          "200": "#E8FEC5",
          "300": "#C0FA73",
          DEFAULT: "#57A203",
          "500": "#477A11",
        },
        neutral: {
          "100": "#F8F9FA",
          "200": "#E9ECEF",
          "300": "#DEE2E6",
          "400": "#CED4DA",
          "500": "#ADB5BD",
          "600": "#6C757D",
          "700": "#495057",
          "800": "#343A40",
          DEFAULT: "#212529",
        },
        danger: {
          "100": "#FCF1F1",
          "200": "#EBA7A7",
          DEFAULT: "#D74F4F",
        },
        success: {
          "100": "#EFF8F4",
          "200": "#9AD1BA",
          DEFAULT: "#36A375",
        },
        warning: {
          "100": "#FEF6EC",
          "200": "#F9C588",
          DEFAULT: "#F38B12",
        },
        info: {
          "100": "#EEF5FC",
          "200": "#97C3ED",
          DEFAULT: "#3087DB",
        },
      },
      fontSize: {
        "display-1": [
          "4rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
          },
        ],
        "display-2": [
          "3rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
          },
        ],
        h1: [
          "2.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
          },
        ],
        h2: [
          "2rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
          },
        ],
        h3: [
          "1.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
          },
        ],
        h6: [
          "1rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
          },
        ],
        "label-lg": [
          "1.25rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
        "label-md": [
          "1rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
        "label-sm": [
          "0.875rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
        "label-xs": [
          "0.75rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
        "paragraph-lg": [
          "1.25rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
        "paragraph-md": [
          "1rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
        "paragraph-sm": [
          "0.875rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
        "paragraph-xs": [
          "0.75rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
      },
      maxWidth: {
        container: "1296px",
      },
    },
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // 網站 meta 設定
  app: {
    head: {
      title: "2025 切版直播班 - 鞋子電商 W3&W4",
      htmlAttrs: {
        lang: "zh-Hant",
      },
      meta: [
        {
          name: "description",
          content: `走出城市的節奏，穿上自己的步調。在 URBNSTEP，我們認為鞋履不只是穿戴飾品，更是你與世界連結的語言。融合城市結構與機能語彙，我們打造適合都會節奏的風格鞋款，陪你自信穿梭每一場風景。`,
        },
        { property: "og:title", content: "2025 切版直播班 - 鞋子電商 W3&W4" },
        {
          property: "og:description",
          content: `走出城市的節奏，穿上自己的步調。在 URBNSTEP，我們認為鞋履不只是穿戴飾品，更是你與世界連結的語言。融合城市結構與機能語彙，我們打造適合都會節奏的風格鞋款，陪你自信穿梭每一場風景。`,
        },
        {
          property: "og:image",
          content: "/ogImage.webp",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_TW" },
        { name: "twitter:card", content: "/ogImage.webp" },
        {
          name: "twitter:image",
          content: "/ogImage.webp",
        },
      ],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "nuxt-swiper"],

  // Google Fonts 的相關配置
  googleFonts: {
    families: {
      "Noto+Sans+TC": [400, 500, 700],
      Mina: [700],
    },
    download: true,
    inject: true,
    display: "swap",
  },
});

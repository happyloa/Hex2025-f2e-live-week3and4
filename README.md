![](https://raw.githubusercontent.com/happyloa/Hex2025-f2e-live-week3and4/refs/heads/main/public/thumb.webp)

# 六角學院 2025 切版直播班第三、四週作業 - 鞋子電商

此專案為六角學院 2025 切版直播班的第三、四週作業之成品

- [線上部署連結](https://hex2025-f2e-live-week3and4.vercel.app/)
- [設計稿](https://www.figma.com/design/CYjKvZQo3db8xYCp6DCkKj/%E5%85%AD%E8%A7%92%EF%BD%9C%E9%9E%8B%E5%AD%90%E9%9B%BB%E5%95%86-W3%E3%80%81W4-%EF%BC%88student-ver.%EF%BC%89)

## 使用技術

- [Nuxt3](https://nuxt.com/)（Vue 加強版）
- [Tailwind CSS](https://tailwindcss.com/)

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Nuxtr](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
$ git clone https://github.com/happyloa/Hex2025-f2e-live-week3and4.git
```

套件安裝

```sh
$ cd Hex2025-f2e-live-week3and4
$ npm install
```

**執行專案（Start the server）**

```sh
$ npm run dev
```

在瀏覽器上輸入

```
http://localhost:3000/
```

即可在本地端預覽專案

## 頁面路徑（Router Link）

位於 `pages`

結構說明

```
pages
├── shop                  商品列表頁面（/shop）
    └── single-product    商品詳情頁（/shop/single-product）
├── about                 品牌故事頁面（/about）
├── collection            我的收藏頁（/collection）
├── index                 首頁（/）
├── login                 登入頁面（/login）
└── register              註冊頁面（/register）
```

## 元件檔案（Components）

位於 `components`

結構說明

```
components

├── Atom                  頁面上的小型元件（按鈕、有點點的 Logo）
├── Common                頁面上用來呈現內容的中型元件（商品卡片）
└── Layout                版面元件（導覽選單、頁尾）
```

## 靜態檔案

位於 `public`

結構說明

```
public
├── icons                 在網站上使用的各式 icon
├── images                電腦版 & 行動版圖片
├── favicon.ico           網站的 favicon
├── thumb.webp            讀我上用的縮圖
└── ogImage.webp          將網站連結貼到社群媒體時出現的預覽圖片
```

## 使用的套件 & 工具

- [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/)
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/)
- [Nuxt Swiper](https://nuxt.com/modules/swiper)
- [TinyPNG](https://tinypng.com/)
- [ChatGPT o3](https://openai.com/)

## 2025/07/15 助教修改建議

![](https://raw.githubusercontent.com/happyloa/Hex2025-f2e-live-week3and4/refs/heads/main/public/ta-advise.webp)

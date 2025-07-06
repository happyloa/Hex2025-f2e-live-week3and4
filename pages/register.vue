<script setup>
useSeoMeta({
  title: "註冊 | 2025 切版直播班 - 鞋子電商 W3&4",
  ogTitle: "註冊 | 2025 切版直播班 - 鞋子電商 W3&4",
});
</script>

<template>
  <section class="py-0 md:px-3 md:py-16">
    <div class="mx-auto flex max-w-container flex-col md:flex-row md:gap-6">
      <!-- 裝飾圖片 -->
      <aside
        class="h-[240px] bg-[url(/images/mobile/login-and-register/login.webp)] bg-cover bg-top md:h-auto md:max-w-[526px] md:flex-1 md:rounded-xl md:bg-[url(/images/desktop/login-and-register/login.webp)] md:bg-center"
      ></aside>
      <main
        class="flex-1 px-3 py-8 md:rounded-xl md:bg-[url(/images/desktop/login-and-register/login-bg.webp)] md:px-20 md:py-[120px]"
      >
        <!-- 標題 -->
        <h3 class="mb-6 text-center text-h4 md:mb-8 md:text-h3">歡迎！</h3>
        <!-- 按鈕 -->
        <div class="mb-6 flex text-center text-h6 md:mb-8">
          <NuxtLink
            to="/login"
            class="flex-1 border-b-2 border-neutral-300 py-3 text-neutral-600 transition duration-300 hover:border-neutral hover:text-neutral"
            >登入</NuxtLink
          ><NuxtLink
            to="/register"
            class="flex-1 border-b-2 border-neutral py-3"
          >
            註冊
          </NuxtLink>
        </div>
        <!-- 註冊方式 -->
        <ul class="flex flex-col gap-2 text-paragraph-md font-normal">
          <li
            class="flex cursor-pointer items-center gap-3 rounded border border-neutral-300 bg-white p-3"
          >
            <img src="/icons/facebook.svg" alt="Facebook 註冊" />
            Facebook 註冊
          </li>
          <li
            class="flex cursor-pointer items-center gap-3 rounded border border-neutral-300 bg-white p-3"
          >
            <img src="/icons/apple.svg" alt="Apple 註冊" />
            Apple 註冊
          </li>
          <li
            class="flex cursor-pointer items-center gap-3 rounded border border-neutral-300 bg-white p-3"
          >
            <img src="/icons/google.svg" alt="Google 註冊" />
            Google 註冊
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>

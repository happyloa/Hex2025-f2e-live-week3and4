<template>
  <!-- 加入會員 CTA -->
  <section
    v-if="!['/collection', '/login', '/register'].includes($route.path)"
    class="pt-6 md:pt-12"
  >
    <div
      class="flex flex-wrap items-center justify-center gap-4 bg-primary-200 p-6 md:gap-6"
    >
      <p class="text-h5 md:text-h4">加入會員取得 9 折優惠</p>
      <AtomButton to="/register" text="馬上註冊" intent="neutral" />
    </div>
  </section>
  <!-- 連結與版權宣告 -->
  <footer class="bg-neutral-100 px-3 py-8 md:py-16">
    <div class="mx-auto max-w-container">
      <nav
        class="mb-6 flex flex-col justify-between md:flex-row md:items-center"
      >
        <AtomLogoWithDot />
        <ul
          class="flex flex-col gap-1 pl-3 text-label-md font-medium md:flex-row md:items-center md:gap-10 md:pl-0"
        >
          <li>
            <NuxtLink
              to="/shop"
              class="py-3 transition duration-300 hover:text-primary"
              :class="$route.path.includes('shop') ? 'text-primary' : ''"
              >商品列表</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="py-3 transition duration-300 hover:text-primary"
              :class="$route.path.includes('about') ? 'text-primary' : ''"
              >品牌故事</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <div
        class="border-t border-neutral-300 pt-8 text-center text-paragraph-sm font-normal text-neutral-600"
      >
        <p class="mb-1">Copyright ©2025 URBNSTYLE</p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

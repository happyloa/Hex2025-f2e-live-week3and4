<script setup>
useSeoMeta({
  title: "商品列表 | 2025 切版直播班 - 鞋子電商 W3&4",
  ogTitle: "商品列表 | 2025 切版直播班 - 鞋子電商 W3&4",
});
</script>

<template>
  <section class="px-3 py-4 md:py-8">
    <div class="mx-auto max-w-container">
      <!-- 麵包屑 -->
      <div
        class="mb-3 flex items-center gap-2 text-label-sm font-medium text-neutral-300 md:mb-6 md:gap-3 md:text-label-md"
      >
        <NuxtLink
          to="/"
          class="text-neutral-600 transition duration-300 hover:text-neutral"
          >首頁</NuxtLink
        >
        /
        <NuxtLink
          to="/"
          class="text-neutral-600 transition duration-300 hover:text-neutral"
          >女鞋</NuxtLink
        >
        /
        <span class="text-neutral">所有商品</span>
      </div>
      <!-- 標題 -->
      <h1 class="mb-3 py-[9.5px] text-h4 md:mb-6 md:py-[7px] md:text-h3">
        女鞋
      </h1>
      <!-- 商品列表 -->
      <div class="flex flex-col gap-6 xl:flex-row">
        <aside
          class="top-[100px] hidden max-w-[196px] flex-1 shrink-0 self-start md:block xl:sticky"
        >
          <nav>
            <ul class="flex flex-col gap-4 text-label-md font-medium">
              <li>
                <a href="#" class="block py-3 text-primary">所有商品</a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-3 transition duration-300 hover:text-primary"
                  >慢跑鞋</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-3 transition duration-300 hover:text-primary"
                  >滑板鞋</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-3 transition duration-300 hover:text-primary"
                  >厚底鞋</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-3 transition duration-300 hover:text-primary"
                  >限定 / 聯名企劃</a
                >
              </li>
            </ul>
          </nav>
        </aside>
        <main class="xl:max-w-[1076px]">
          <ul
            class="mb-8 grid grid-cols-2 gap-x-3 gap-y-6 md:mb-12 md:grid-cols-3 md:gap-x-6 md:gap-y-12"
          >
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-1.webp"
                name="PLATFORM 404"
                price="2,600"
              />
            </li>
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-2.webp"
                name="PLATFORM 404"
                price="2,600"
              />
            </li>
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-3.webp"
                name="VM001"
                price="2,600"
              />
            </li>
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-4.webp"
                name="Melty Kiss"
                price="4,000"
              />
            </li>
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-5.webp"
                name="BOOMBLOK"
                price="3,200"
              />
            </li>
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-6.webp"
                name="BOOMBLOK"
                price="3,200"
              />
            </li>
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-7.webp"
                name="R:UNER"
                price="4,000"
              />
            </li>
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-8.webp"
                name="Sugar Snap"
                price="4,000"
              />
            </li>
            <li>
              <CommonCardProduct
                img="/images/desktop/shop/shop-9.webp"
                name="Neofoam"
                price="4,000"
              />
            </li>
          </ul>
          <nav
            class="mx-auto flex max-w-[336px] items-center gap-3 text-label-md font-medium"
          >
            <button
              type="button"
              class="size-10 content-center justify-items-center transition duration-300 hover:bg-neutral-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.193 2.058a.625.625 0 0 1 0 .885L7.133 10l7.06 7.058a.626.626 0 1 1-.886.885l-7.5-7.5a.624.624 0 0 1 0-.885l7.5-7.5a.625.625 0 0 1 .886 0"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div class="flex gap-2">
              <button
                type="button"
                class="size-10 content-center justify-items-center bg-primary-300"
              >
                1
              </button>
              <button
                type="button"
                class="size-10 content-center justify-items-center transition duration-300 hover:bg-neutral-100"
              >
                2
              </button>
              <button
                type="button"
                class="size-10 content-center justify-items-center transition duration-300 hover:bg-neutral-100"
              >
                3
              </button>
              <button
                type="button"
                class="size-10 content-center justify-items-center transition duration-300 hover:bg-neutral-100"
              >
                ...
              </button>
              <button
                type="button"
                class="size-10 content-center justify-items-center transition duration-300 hover:bg-neutral-100"
              >
                10
              </button>
            </div>
            <button
              type="button"
              class="size-10 content-center justify-items-center transition duration-300 hover:bg-neutral-100"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.808 2.058a.625.625 0 0 1 .885 0l7.5 7.5a.625.625 0 0 1 0 .885l-7.5 7.5a.626.626 0 1 1-.885-.885L12.866 10 5.808 2.943a.625.625 0 0 1 0-.885"
                  fill="currentColor"
                />
              </svg>
            </button>
          </nav>
        </main>
      </div>
    </div>
  </section>
</template>

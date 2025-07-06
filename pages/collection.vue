<script setup>
useSeoMeta({
  title: "我的收藏 | 2025 切版直播班 - 鞋子電商 W3&4",
  ogTitle: "我的收藏 | 2025 切版直播班 - 鞋子電商 W3&4",
});
</script>

<template>
  <section class="px-3 py-6 md:py-16">
    <div class="mx-auto max-w-[636px]">
      <!-- 標題 -->
      <h1
        class="mb-6 flex items-center justify-center gap-2 text-h4 md:mb-8 md:gap-4 md:text-h3"
      >
        <img
          src="/public/icons/check-with-green-bg.webp"
          alt="勾勾 icon"
          class="size-8 md:size-10"
        />我的收藏
      </h1>
      <!-- 營業時間 -->
      <div
        class="mb-6 flex items-center gap-3 rounded bg-primary-100 p-4 text-label-md font-medium text-primary md:mb-8"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.25A2.25 2.25 0 0 1 2.25 3h13.5A2.25 2.25 0 0 1 18 5.25V7.5h1.53a2.25 2.25 0 0 1 1.755.845l2.221 2.774c.32.4.494.896.494 1.408v3.223A2.25 2.25 0 0 1 21.75 18H21a3 3 0 0 1-6 0H7.5a3 3 0 1 1-5.997-.128A2.25 2.25 0 0 1 0 15.75zm1.941 11.184a3 3 0 0 1 5.157.066h8.304a3 3 0 0 1 1.098-1.098V5.25a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 .441.684M18 15a3 3 0 0 1 2.598 1.5h1.152a.75.75 0 0 0 .75-.75v-3.225a.75.75 0 0 0-.165-.468l-2.22-2.775A.75.75 0 0 0 19.53 9H18zM4.5 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
            fill="currentColor"
          />
        </svg>
        <p>
          門市營業時間：<br class="block md:hidden" />週一至週五 10:00 - 22:00
        </p>
      </div>
      <!-- 收藏列表 -->
      <ul class="mb-6 flex flex-col gap-6 md:mb-8 md:gap-8">
        <li>
          <article class="flex gap-4 border-b border-neutral-300 pb-8">
            <img
              src="/public/images/desktop/collection/collection-1.webp"
              alt="收藏商品1"
            />
            <div class="flex flex-1 flex-col gap-2">
              <h2 class="text-h6 md:text-h5">PLATFORM 404</h2>
              <div
                class="flex gap-3 text-paragraph-sm font-normal text-neutral-600 md:text-paragraph-md"
              >
                尺寸<span
                  class="text-label-sm font-medium text-neutral md:text-label-md"
                  >38</span
                >
              </div>
              <div
                class="flex gap-3 text-paragraph-sm font-normal text-neutral-600 md:text-paragraph-md"
              >
                顏色<span
                  class="text-label-sm font-medium text-neutral md:text-label-md"
                  >Navy</span
                >
              </div>
              <div class="text-h6 md:self-end">NT$2,600</div>
            </div>
          </article>
        </li>
        <li>
          <article class="flex gap-4 border-b border-neutral-300 pb-8">
            <img
              src="/public/images/desktop/collection/collection-2.webp"
              alt="收藏商品2"
            />
            <div class="flex flex-1 flex-col gap-2">
              <h2 class="text-h6 md:text-h5">BOOMLOK</h2>
              <div
                class="flex gap-3 text-paragraph-sm font-normal text-neutral-600 md:text-paragraph-md"
              >
                尺寸<span
                  class="text-label-sm font-medium text-neutral md:text-label-md"
                  >38</span
                >
              </div>
              <div
                class="flex gap-3 text-paragraph-sm font-normal text-neutral-600 md:text-paragraph-md"
              >
                顏色<span
                  class="text-label-sm font-medium text-neutral md:text-label-md"
                  >White</span
                >
              </div>
              <div class="text-h6 md:self-end">NT$3,200</div>
            </div>
          </article>
        </li>
        <li>
          <article class="flex gap-4 border-b border-neutral-300 pb-8">
            <img
              src="/public/images/desktop/collection/collection-3.webp"
              alt="收藏商品3"
            />
            <div class="flex flex-1 flex-col gap-2">
              <h2 class="text-h6 md:text-h5">MELTY KISS</h2>
              <div
                class="flex gap-3 text-paragraph-sm font-normal text-neutral-600 md:text-paragraph-md"
              >
                尺寸<span
                  class="text-label-sm font-medium text-neutral md:text-label-md"
                  >38</span
                >
              </div>
              <div
                class="flex gap-3 text-paragraph-sm font-normal text-neutral-600 md:text-paragraph-md"
              >
                顏色<span
                  class="text-label-sm font-medium text-neutral md:text-label-md"
                  >Violet</span
                >
              </div>
              <div class="text-h6 md:self-end">NT$4,000</div>
            </div>
          </article>
        </li>
      </ul>
      <!-- 預約試穿 -->
      <AtomButton intent="neutral" text="立即預約門市試穿" class="mx-auto" />
    </div>
  </section>
</template>

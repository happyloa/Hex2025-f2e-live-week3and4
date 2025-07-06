<script setup>
useSeoMeta({
  title: "Platform 404 | 2025 切版直播班 - 鞋子電商 W3&4",
  ogTitle: "Platform 404 | 2025 切版直播班 - 鞋子電商 W3&4",
});

const isCollected = ref(false);
</script>

<template>
  <section class="px-0 py-0 sm:px-3 sm:py-16">
    <div class="mx-auto flex max-w-container flex-col gap-6 sm:flex-row">
      <aside>
        <!-- 電腦版 -->
        <div
          class="hidden max-w-[746px] grid-cols-1 gap-2 sm:grid lg:grid-cols-2"
        >
          <img
            src="/images/desktop/single-product/single1.webp"
            alt="商品詳情1"
          />
          <img
            src="/images/desktop/single-product/single2.webp"
            alt="商品詳情2"
          />
          <img
            src="/images/desktop/single-product/single3.webp"
            alt="商品詳情3"
          />
          <img
            src="/images/desktop/single-product/single4.webp"
            alt="商品詳情4"
          />
          <img
            src="/images/desktop/single-product/single5.webp"
            alt="商品詳情5"
          />
          <img
            src="/images/desktop/single-product/single6.webp"
            alt="商品詳情6"
          />
          <img
            src="/images/desktop/single-product/single7.webp"
            alt="商品詳情7"
          />
          <img
            src="/images/desktop/single-product/single8.webp"
            alt="商品詳情8"
          />
        </div>
        <!-- 手機版 -->
        <ClientOnly>
          <swiper-container
            class="block sm:hidden"
            :slides-per-view="1.2"
            space-between="8"
            autoplay-delay="3000"
            autoplay-disable-on-interaction="true"
            :loop="true"
          >
            <swiper-slide
              ><img
                src="/images/desktop/single-product/single1.webp"
                alt="商品詳情1"
            /></swiper-slide>
            <swiper-slide
              ><img
                src="/images/desktop/single-product/single2.webp"
                alt="商品詳情2"
            /></swiper-slide>
            <swiper-slide
              ><img
                src="/images/desktop/single-product/single3.webp"
                alt="商品詳情3"
            /></swiper-slide>
            <swiper-slide
              ><img
                src="/images/desktop/single-product/single4.webp"
                alt="商品詳情4"
            /></swiper-slide>
            <swiper-slide
              ><img
                src="/images/desktop/single-product/single5.webp"
                alt="商品詳情5"
            /></swiper-slide>
            <swiper-slide
              ><img
                src="/images/desktop/single-product/single6.webp"
                alt="商品詳情6"
            /></swiper-slide>
            <swiper-slide
              ><img
                src="/images/desktop/single-product/single7.webp"
                alt="商品詳情7"
            /></swiper-slide>
            <swiper-slide
              ><img
                src="/images/desktop/single-product/single8.webp"
                alt="商品詳情8" /></swiper-slide
          ></swiper-container>
        </ClientOnly>
      </aside>
      <main class="sticky top-[100px] self-start px-3 sm:max-w-[526px] sm:px-0">
        <!-- 麵包屑 -->
        <div
          class="mb-2 flex items-center gap-2 text-label-sm font-medium text-neutral-300 sm:mb-3 sm:gap-3 sm:text-label-md"
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
          <NuxtLink
            to="/"
            class="text-neutral-600 transition duration-300 hover:text-neutral"
            >滑板鞋</NuxtLink
          >
          /
          <span class="text-neutral">Platform 404</span>
        </div>
        <!-- 標題 -->
        <h1 class="mb-3 text-h4 sm:mb-4 sm:text-h2">Platform 404</h1>
        <!-- 價格 -->
        <div class="mb-3 flex items-center gap-2 sm:mb-4">
          <h3 class="text-h6 text-primary sm:text-h5">NT$2,600</h3>
          <span
            class="text-paragraph-sm font-normal text-neutral-500 line-through"
            >NT$3,200</span
          >
        </div>
        <!-- 商品介紹 -->
        <div class="mb-8 text-paragraph-md font-normal">
          <p class="mb-3">
            Platform 404
            以柔和奶白為底，搭配深藍色皮革點綴，走在街上自帶回頭率。鞋型採用復古運動風輪廓，結合輕量厚底與柔軟泡棉鞋舌，兼顧美感與舒適。
          </p>
          <p>
            鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。
          </p>
        </div>
        <!-- 顏色選項 -->
        <div class="mb-6 sm:mb-8">
          <h3 class="mb-2 text-paragraph-md font-normal">顏色</h3>
          <ul
            class="flex gap-2 text-center text-label-md font-medium text-neutral-600"
          >
            <li>
              <img
                src="/images/desktop/single-product/single1.webp"
                alt="顏色1"
                class="mb-1 size-16"
              />
              <p>藍色</p>
            </li>
            <li>
              <img
                src="/images/desktop/single-product/also-like-4.webp"
                alt="顏色2"
                class="mb-1 size-16"
              />
              <p>卡其色</p>
            </li>
          </ul>
        </div>
        <!-- 尺寸選項 -->
        <div class="mb-6 sm:mb-12">
          <h3 class="mb-2 text-paragraph-md font-normal">尺寸</h3>
          <ul
            class="mb-2 grid grid-cols-2 gap-2 text-center text-label-md font-medium md:grid-cols-3"
          >
            <li class="cursor-pointer rounded border border-neutral px-6 py-3">
              35(22.5cm)
            </li>
            <li
              class="cursor-pointer rounded border border-neutral-300 px-6 py-3 transition duration-300 hover:border-neutral"
            >
              36(23.0cm)
            </li>
            <li
              class="cursor-pointer rounded border border-neutral-300 px-6 py-3 transition duration-300 hover:border-neutral"
            >
              37(23.5cm)
            </li>
            <li
              class="cursor-pointer rounded border border-neutral-300 px-6 py-3 transition duration-300 hover:border-neutral"
            >
              38(24.0cm)
            </li>
            <li
              class="cursor-pointer rounded border border-neutral-300 px-6 py-3 transition duration-300 hover:border-neutral"
            >
              39(24.5cm)
            </li>
            <li
              class="cursor-pointer rounded border border-neutral-300 px-6 py-3 transition duration-300 hover:border-neutral"
            >
              40(25.0cm)
            </li>
            <li
              class="cursor-pointer rounded border border-neutral-300 px-6 py-3 transition duration-300 hover:border-neutral"
            >
              41(26.0cm)
            </li>
            <li
              class="pointer-events-none rounded border border-neutral-300 px-6 py-3 opacity-40"
            >
              42(26.5cm)
            </li>
            <li
              class="pointer-events-none rounded border border-neutral-300 px-6 py-3 opacity-40"
            >
              43(27.0cm)
            </li>
          </ul>
          <p class="text-paragraph-sm font-normal text-danger">僅剩 3 雙</p>
        </div>
        <!-- 按鈕 -->
        <div
          class="mb-8 flex flex-row-reverse gap-2 text-label-md font-medium sm:flex-row"
        >
          <!-- 電腦版收藏 -->
          <button
            type="button"
            class="hidden flex-1 items-center justify-center gap-2 rounded border border-neutral p-3 transition duration-300 hover:bg-neutral hover:text-white sm:flex"
            @click="isCollected = !isCollected"
          >
            <!-- 空心愛心 -->
            <svg
              v-if="isCollected === false"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10 3.435-.896-.921C7 .35 3.142 1.098 1.75 3.816c-.654 1.28-.801 3.125.392 5.482 1.15 2.268 3.543 4.986 7.858 7.946 4.315-2.96 6.706-5.678 7.857-7.946 1.194-2.358 1.048-4.203.393-5.482C16.857 1.098 13 .35 10.896 2.513zm0 15.315C-9.166 6.085 4.099-3.8 9.78 1.43q.113.103.22.214.105-.111.22-.213C15.9-3.802 29.166 6.084 10 18.75"
                fill="currentColor"
              />
            </svg>
            <!-- 實心愛心 -->
            <svg
              v-else
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#a)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.75 1.643c5.547-5.703 19.417 4.276 0 17.107-19.418-12.83-5.548-22.81 0-17.107"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.75 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
            {{ isCollected ? "已收藏" : "加入收藏" }}
          </button>
          <!-- 手機版收藏 -->
          <button
            type="button"
            class="block p-3 sm:hidden"
            @click="isCollected = !isCollected"
          >
            <!-- 空心愛心 -->
            <svg
              v-if="isCollected === false"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
            >
              <path
                d="m10 3.435-.896-.921C7 .35 3.142 1.098 1.75 3.816c-.654 1.28-.801 3.125.392 5.482 1.15 2.268 3.543 4.986 7.858 7.946 4.315-2.96 6.706-5.678 7.857-7.946 1.194-2.358 1.048-4.203.393-5.482C16.857 1.098 13 .35 10.896 2.513zm0 15.315C-9.166 6.085 4.099-3.8 9.78 1.43q.113.103.22.214.105-.111.22-.213C15.9-3.802 29.166 6.084 10 18.75"
                fill="currentColor"
              />
            </svg>
            <!-- 實心愛心 -->
            <svg
              v-else
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
            >
              <g clip-path="url(#a)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.75 1.643c5.547-5.703 19.417 4.276 0 17.107-19.418-12.83-5.548-22.81 0-17.107"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.75 0h20v20h-20z" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            type="button"
            class="flex flex-1 items-center justify-center gap-2 rounded border bg-neutral p-3 text-white"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 1.25a2.5 2.5 0 0 1 2.5 2.5v2.5H8v-2.5a2.5 2.5 0 0 1 2.5-2.5m3.75 5v-2.5a3.75 3.75 0 0 0-7.5 0v2.5H4.7a1.875 1.875 0 0 0-1.854 1.596l-1.283 8.567A3.125 3.125 0 0 0 4.653 20h11.694a3.125 3.125 0 0 0 3.09-3.587l-1.284-8.567A1.875 1.875 0 0 0 16.3 6.25zM13 7.5v1.875a.625.625 0 0 0 1.25 0V7.5h2.05a.625.625 0 0 1 .617.533l1.285 8.563a1.874 1.874 0 0 1-1.853 2.154H4.653a1.876 1.876 0 0 1-1.854-2.154l1.285-8.563A.625.625 0 0 1 4.7 7.5h2.05v1.875a.625.625 0 1 0 1.25 0V7.5z"
                fill="currentColor"
              />
            </svg>
            門市預約試穿
          </button>
        </div>
        <!-- 商品相關資訊 -->
        <details class="group border-b border-neutral-300 py-3" open>
          <summary
            class="mb-0 cursor-pointer list-none text-label-md font-medium group-open:mb-1"
          >
            商品材質
          </summary>
          <ul class="text-paragraph-md font-normal text-neutral-600">
            <li>鞋面：合成皮革（Synthetic Leather）</li>
            <li>內裡：透氣網布材質，提升舒適與排汗性</li>
            <li>鞋底：EVA 輕量發泡橡膠，具備良好緩震與止滑效果</li>
            <li>鞋帶：聚酯纖維，耐拉扯不易鬆脫</li>
          </ul>
        </details>
        <details class="group border-b border-neutral-300 py-3" open>
          <summary
            class="mb-0 cursor-pointer list-none text-label-md font-medium group-open:mb-1"
          >
            購買須知
          </summary>
          <p class="text-paragraph-md font-normal text-neutral-600">
            商品顏色因螢幕顯示可能略有差異，請以實品為準。<br />
            建議首次穿著前試穿確認尺寸，避免影響退換貨權益。<br />
            本商品為限量發售，庫存有限，如需更換尺寸請儘早聯繫客服協助處理。
          </p>
        </details>
        <details class="group border-b border-neutral-300 py-3" open>
          <summary
            class="mb-0 cursor-pointer list-none text-label-md font-medium group-open:mb-1"
          >
            保養方式
          </summary>
          <p class="text-paragraph-md font-normal text-neutral-600">
            建議以乾布或微濕軟布擦拭表面汙漬，避免機洗或長時間浸水。<br />
            收納時請放置於乾燥通風處，避免日曬及高溫導致變形或龜裂。<br />
            若需深層清潔，建議使用中性清潔劑並搭配柔刷輕刷，勿使用漂白水或強酸強鹼清潔劑。
          </p>
        </details>
      </main>
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: "首頁 | 2025 切版直播班 - 鞋子電商 W3&4",
  ogTitle: "首頁 | 2025 切版直播班 - 鞋子電商 W3&4",
});
</script>

<template>
  <!-- Banner -->
  <section
    class="h-[480px] content-center bg-[url(/images/mobile/home/banner.webp)] bg-cover bg-center px-6 md:h-[800px] md:bg-[url(/images/desktop/home/banner.webp)]"
  >
    <div class="mx-auto max-w-[1520px]">
      <div class="mb-8 text-white md:mb-12">
        <h1 class="mb-2 text-display-2 md:mb-4 md:text-display-1">URBNSTEP</h1>
        <p class="text-h5 md:text-h3">Your Step, Your Statement</p>
      </div>
      <AtomButton to="/shop" text="立即選購" />
    </div>
  </section>
  <!-- 新品上市 -->
  <section class="px-3 py-10 md:py-16">
    <div class="mx-auto max-w-container">
      <div class="mb-6 text-center md:mb-8">
        <h2 class="mb-2 text-h2 md:mb-3 md:text-display-2">New Arrival</h2>
        <p class="text-h4 md:text-h2">新品上市</p>
      </div>
      <ul class="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-10">
        <li>
          <CommonCardProduct
            img="/images/desktop/home/new-1.webp"
            name="Monoverse"
            price="3,600"
          />
        </li>
        <li>
          <CommonCardProduct
            img="/images/desktop/home/new-2.webp"
            name="PLATFORM 404"
            price="2,600"
          />
        </li>
        <li>
          <CommonCardProduct
            img="/images/desktop/home/new-3.webp"
            name="URBN Force"
            price="3,200"
          />
        </li>
        <li>
          <CommonCardProduct
            img="/images/desktop/home/new-4.webp"
            name="Mode90"
            price="4,000"
          />
        </li>
      </ul>
    </div>
  </section>
  <!-- 熱銷補貨 -->
  <section class="px-3 py-10 md:py-16">
    <div class="mx-auto max-w-container">
      <h2 class="mb-4 text-h4 md:text-h2">熱銷補貨</h2>
      <!-- 電腦版 -->
      <div class="hidden grid-cols-4 gap-6 md:grid">
        <CommonCardImage img="/images/desktop/home/hot-1.webp" />
        <CommonCardImage img="/images/desktop/home/hot-2.webp" />
        <CommonCardImage img="/images/desktop/home/hot-3.webp" />
        <CommonCardImage img="/images/desktop/home/hot-4.webp" />
      </div>
      <!-- 手機版 -->
      <ClientOnly>
        <swiper-container
          class="block md:hidden"
          :slides-per-view="1.2"
          space-between="16"
          autoplay-delay="3000"
          autoplay-disable-on-interaction="true"
          :loop="true"
        >
          <swiper-slide>
            <CommonCardImage img="/images/desktop/home/hot-1.webp" />
          </swiper-slide>
          <swiper-slide>
            <CommonCardImage img="/images/desktop/home/hot-2.webp" />
          </swiper-slide>
          <swiper-slide>
            <CommonCardImage img="/images/desktop/home/hot-3.webp" />
          </swiper-slide>
          <swiper-slide>
            <CommonCardImage img="/images/desktop/home/hot-4.webp" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
  <!-- 跨界聯名 -->
  <section class="overflow-x-hidden py-6 md:py-12">
    <div
      class="h-[450px] content-center justify-items-center bg-[url(/images/mobile/home/banner-co-branded.webp)] bg-cover bg-center px-3 md:h-[470px] md:bg-[url(/images/desktop/home/banner-co-branded.webp)]"
    >
      <div class="relative text-center text-white">
        <h2
          class="mb-4 flex flex-col items-center gap-2 text-h2 md:flex-row md:gap-6 md:text-display-2"
        >
          URBNSTEP<span class="text-h3 text-primary-300 md:text-h1">x</span
          >Kevin Chen
        </h2>
        <p class="mb-6 text-h5 md:mb-8 md:text-h2">跨界聯名，限量發售</p>
        <p
          class="mb-8 text-paragraph-md font-normal text-neutral-500 md:mb-12 md:text-paragraph-lg"
        >
          新銳漫畫家 Kevin Chen 親自操刀設計<br class="block md:hidden" /><span
            class="hidden md:inline"
            >，</span
          >街頭能量全面引爆！
        </p>
        <AtomButton to="/shop" text="立即搶購" class="mx-auto" />
        <img
          src="/public/images/deco/star.svg"
          alt="星星裝飾"
          class="absolute -left-[32px] -top-[32px] size-12 md:-left-[80px]"
        />
        <img
          src="/public/images/deco/sparkle.svg"
          alt="火花裝飾"
          class="absolute -right-[40px] bottom-[40px] h-16 w-[76px] md:bottom-[32px]"
        />
      </div>
    </div>
  </section>
  <!-- 依系列選購 -->
  <section class="px-3 py-10 md:py-16">
    <div class="mx-auto max-w-container">
      <h2 class="mb-4 text-h4 md:text-h2">依系列選購</h2>
      <div class="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
        <CommonCardCategory
          img="/images/desktop/home/category-1.webp"
          name="URBN RUNNER"
          category="慢跑系列"
        />
        <CommonCardCategory
          img="/images/desktop/home/category-2.webp"
          name="STREETMODE"
          category="滑板系列"
        />
        <CommonCardCategory
          img="/images/desktop/home/category-3.webp"
          name="CHUNK DISTRICT"
          category="厚底系列"
        />
        <CommonCardCategory
          img="/images/desktop/home/category-4.webp"
          name="COLLAB ZONE"
          category="聯名企劃"
        />
      </div>
    </div>
  </section>
  <!-- 穿搭靈感 -->
  <section class="px-3 py-10 md:py-16">
    <div class="mx-auto max-w-container">
      <h2 class="mb-4 text-h4 md:text-h2">穿搭靈感</h2>
      <!-- 電腦版 -->
      <div class="hidden gap-2 md:grid md:grid-cols-4 lg:grid-cols-6">
        <img
          src="/public/images/desktop/home/inspiration-1.webp"
          alt="穿搭靈感1"
        />
        <img
          src="/public/images/desktop/home/inspiration-2.webp"
          alt="穿搭靈感2"
        />
        <img
          src="/public/images/desktop/home/inspiration-3.webp"
          alt="穿搭靈感3"
        />
        <img
          src="/public/images/desktop/home/inspiration-4.webp"
          alt="穿搭靈感4"
        />
        <img
          src="/public/images/desktop/home/inspiration-5.webp"
          alt="穿搭靈感5"
          class="lg:col-span-2 lg:row-span-2"
        />
        <img
          src="/public/images/desktop/home/inspiration-6.webp"
          alt="穿搭靈感6"
          class="lg:col-span-2 lg:row-span-2"
        />
        <img
          src="/public/images/desktop/home/inspiration-7.webp"
          alt="穿搭靈感7"
        />
        <img
          src="/public/images/desktop/home/inspiration-8.webp"
          alt="穿搭靈感8"
        />
        <img
          src="/public/images/desktop/home/inspiration-9.webp"
          alt="穿搭靈感9"
        />
        <img
          src="/public/images/desktop/home/inspiration-10.webp"
          alt="穿搭靈感10"
        />
        <img
          src="/public/images/desktop/home/inspiration-11.webp"
          alt="穿搭靈感11"
        />
        <img
          src="/public/images/desktop/home/inspiration-12.webp"
          alt="穿搭靈感12"
        />
      </div>
      <!-- 手機版輪播 -->
      <ClientOnly>
        <swiper-container
          class="block md:hidden"
          :slides-per-view="1.2"
          space-between="16"
          autoplay-delay="3000"
          autoplay-disable-on-interaction="true"
          :loop="true"
        >
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-1.webp"
              alt="穿搭靈感1"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-2.webp"
              alt="穿搭靈感2"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-3.webp"
              alt="穿搭靈感3"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-4.webp"
              alt="穿搭靈感4"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-5.webp"
              alt="穿搭靈感5"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-6.webp"
              alt="穿搭靈感6"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-7.webp"
              alt="穿搭靈感7"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-8.webp"
              alt="穿搭靈感8"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-9.webp"
              alt="穿搭靈感9"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-10.webp"
              alt="穿搭靈感10"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-11.webp"
              alt="穿搭靈感11"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="/public/images/desktop/home/inspiration-12.webp"
              alt="穿搭靈感12"
            />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
</template>

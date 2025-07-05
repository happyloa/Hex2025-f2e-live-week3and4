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
    <div class="mx-auto max-w-container"></div>
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
        <AtomButton text="立即搶購" class="mx-auto" />
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
  <section class="px-3 py-10 md:py-16">
    <div class="mx-auto max-w-container">
      <h2 class="text-h4 md:text-h2">依系列選購</h2>
    </div>
  </section>
</template>

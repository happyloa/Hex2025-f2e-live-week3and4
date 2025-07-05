<template>
  <!-- Banner -->
  <section
    class="h-[480px] content-center bg-[url(/images/mobile/home/banner.webp)] bg-cover bg-center px-6 md:h-[800px] md:bg-[url(/images/desktop/home/banner.webp)]"
  >
    <div class="mx-auto max-w-[1520px]">
      <div class="mb-8 font-bold text-white md:mb-12">
        <h1 class="mb-2 text-display-2 md:mb-4 md:text-display-1">URBNSTEP</h1>
        <p class="text-h5 md:text-h3">Your Step, Your Statement</p>
      </div>
      <AtomButton to="/shop" text="立即選購" />
    </div>
  </section>
  <!-- 新品上市 -->
  <section class="px-3 py-10 md:py-16">
    <div class="mx-auto max-w-container">
      <div class="mb-6 text-center font-bold md:mb-8">
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
</template>

<template>
  <header class="liquid-glass | sticky top-0 z-40">
    <div
      class="mx-auto flex max-w-container items-center justify-between p-3 md:px-0 md:py-4"
    >
      <nav class="flex items-center gap-12">
        <AtomLogoWithDot />
        <ul class="hidden gap-10 font-medium md:flex">
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
      <NuxtLink
        to="/collection"
        class="p-3 transition duration-300 hover:text-primary"
        :class="$route.path.includes('collection') ? 'text-primary' : ''"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m3-4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m6 12c0 1.5-1.5 1.5-1.5 1.5h-15S3 21 3 19.5s1.5-6 9-6 9 4.5 9 6m-1.5-.006c-.002-.369-.231-1.479-1.248-2.496C17.274 16.02 15.434 15 12 15c-3.435 0-5.274 1.02-6.252 1.998-1.017 1.017-1.245 2.127-1.248 2.496z"
            fill="currentColor"
          />
        </svg>
      </NuxtLink>
    </div>
    <!-- 只有首頁才顯示下面的選單 -->
    <nav
      v-if="$route.path === '/'"
      class="grid grid-cols-2 text-center text-label-md font-medium md:hidden"
    >
      <NuxtLink
        to="/shop"
        class="bg-primary-100 p-3 transition duration-300 hover:bg-primary-200"
        :class="$route.path.includes('shop') ? 'bg-primary-200' : ''"
        >商品列表</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="bg-primary-100 p-3 transition duration-300 hover:bg-primary-200"
        :class="$route.path.includes('about') ? 'bg-primary-200' : ''"
        >品牌故事</NuxtLink
      >
    </nav>
  </header>

  <!-- 進階：SVG 濾鏡 -->
  <svg style="position: fixed; width: 0; height: 0; pointer-events: none">
    <filter id="liquid-header-displace">
      <feTurbulence
        id="liqNoise"
        type="fractalNoise"
        baseFrequency="0.006 0.005"
        numOctaves="2"
        seed="11"
        result="noise"
      />
      <feGaussianBlur in="noise" stdDeviation="0.6" result="blur" />
      <feDisplacementMap
        in="SourceGraphic"
        in2="blur"
        scale="40"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
</template>

<style src="~/assets/css/liquid-glass.css"></style>

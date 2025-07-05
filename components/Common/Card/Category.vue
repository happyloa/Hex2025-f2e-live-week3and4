<script setup>
const props = defineProps({
  /**
   * 商品圖片路徑
   * @type {String}
   */
  img: {
    type: String,
    default: "/images/desktop/home/category-1.webp",
  },
  /**
   * 商品名稱
   * @type {String}
   */
  name: {
    type: String,
    default: "透過 name prop 來輸入商品名稱",
  },
  /**
   * 商品價格
   * @type {String}
   */
  category: {
    type: String,
    default: "透過 category prop 來輸入商品系列",
  },
});
const { img, name, category } = toRefs(props);
</script>

<template>
  <NuxtLink to="/shop">
    <article class="group relative">
      <img :src="img" :alt="`${name} ${category}`" class="size-full" />
      <div
        class="absolute inset-0 size-full content-center bg-[#00000066] text-center text-h6 text-white"
      >
        <h3
          class="mb-2 transition duration-300 group-hover:text-primary-300 lg:text-h3"
        >
          {{ name }}
        </h3>
        <p class="lg:text-h4">{{ category }}</p>
      </div>
    </article>
  </NuxtLink>
</template>

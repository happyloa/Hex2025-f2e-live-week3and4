<script setup>
const props = defineProps({
  /**
   * 商品圖片路徑
   * @type {String}
   */
  img: {
    type: String,
    default: "/images/desktop/home/hot-1.webp",
  },
});
const { img } = toRefs(props);
</script>

<template>
  <NuxtLink to="/shop/single-product">
    <article class="group relative">
      <img
        :src="img"
        alt="熱銷商品"
        class="transition duration-300 group-hover:opacity-70"
      />
      <div
        class="absolute left-0 top-0 bg-primary-100 px-3 py-2 text-label-sm font-medium text-primary"
      >
        人氣 No.1
      </div>
    </article>
  </NuxtLink>
</template>

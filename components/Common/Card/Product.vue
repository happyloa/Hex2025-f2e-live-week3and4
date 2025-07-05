<script setup>
const props = defineProps({
  /**
   * 商品圖片路徑
   * @type {String}
   */
  img: {
    type: String,
    default: "/images/desktop/home/new-1.webp",
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
  price: {
    type: String,
    default: "透過 price prop 來輸入商品價格",
  },
});
const { img, name, price } = toRefs(props);
</script>

<template>
  <article class="group">
    <img
      :src="img"
      :alt="name"
      class="mb-2 block transition duration-300 group-hover:opacity-80 sm:mb-3"
    />
    <h3 class="mb-0 text-h6 sm:mb-1 sm:text-h5">{{ name }}</h3>
    <p class="text-label-md font-medium">NT${{ price }}</p>
  </article>
</template>

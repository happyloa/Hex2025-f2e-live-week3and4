<script setup>
const props = defineProps({
  /**
   * 按鈕類型
   * @type {'primary' | 'neutral'}
   */
  intent: {
    type: String,
    default: "primary",
  },
  /**
   * 按鈕尺寸
   * @type {'lg' | 'sm'}
   */
  size: {
    type: String,
    default: "lg",
  },
  /**
   * 是否為 outline 版本
   * @type {Boolean}
   */
  isOutlined: {
    type: Boolean,
    default: false,
  },
  /**
   * 按鈕文字
   * @type {String}
   */
  text: {
    type: String,
    default: "透過 text prop 來傳入文字",
  },
  /**
   * 是否有 icon
   * @type {Boolean}
   */
  hasIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * icon 位置
   * @type {'left' | 'right'}
   */
  iconPos: {
    type: String,
    default: "left",
  },
  /**
   * 連結
   * @type {String}
   */
  to: {
    type: String,
    default: "#",
  },
  target: {
    type: String,
    default: "_self",
  },
  /**
   * 是否停用
   * @type {Boolean}
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});
const {
  intent,
  size,
  isOutlined,
  text,
  hasIcon,
  iconPos,
  to,
  target,
  disabled,
} = toRefs(props);

/**
 * 動態產生按鈕 class
 */
const btnClass = computed(() => {
  const arr = [
    // RWD 尺寸
    size.value === "sm" ? "py-2 px-4" : "py-2 px-4 md:py-3 md:px-6",
    // 禁用態
    disabled.value && "pointer-events-none opacity-40",
    // outline 狀態
    isOutlined.value
      ? [
          "border", // 一定有 border
          intent.value === "primary"
            ? // primary: 文字顏色、icon hover 都是 text-neutral，hover 不變
              "border-primary-300 text-neutral hover:text-neutral hover:bg-primary-300"
            : // neutral: 預設 text-neutral，hover 文字變白且 bg-neutral
              "border-neutral text-neutral hover:text-white hover:bg-neutral",
        ]
      : [
          intent.value === "primary"
            ? "bg-primary-300 text-neutral hover:text-primary-500"
            : "bg-neutral text-white hover:bg-neutral-700",
        ],
  ];
  return arr.flat().filter(Boolean);
});

// icon class 處理（icon 一定要跟隨文字顏色邏輯）
const iconClass = computed(() => {
  // outline 狀態
  if (isOutlined.value) {
    if (intent.value === "primary") {
      // always text-neutral
      return ["transition-colors", "text-neutral", "group-hover:text-neutral"];
    } else {
      // neutral: 預設 text-neutral, hover 變 text-white
      return ["transition-colors", "text-neutral", "group-hover:text-white"];
    }
  }
  // 非 outline
  if (intent.value === "primary") {
    return [
      "transition-colors",
      "text-neutral", // #212529
      "group-hover:text-primary-500", // #477A11
    ];
  }
  // neutral
  return ["transition-colors", "text-white", "group-hover:text-white"];
});

// icon 大小 RWD 處理
const iconSizeClass = computed(() => {
  // sm: 永遠 size-4
  if (size.value === "sm") return "size-4";
  // 其餘：預設 size-4，md 以上 size-5
  return "size-4 md:size-5";
});
</script>

<template>
  <NuxtLink
    :to="to"
    :target="target"
    class="group flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded text-label-md font-medium transition duration-300"
    :class="btnClass"
    :aria-disabled="disabled"
    tabindex="0"
  >
    <!-- 左側 icon -->
    <svg
      v-if="hasIcon && iconPos === 'left'"
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="[iconSizeClass, iconClass]"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.75 10a.625.625 0 0 0-.625-.625H3.384l3.934-3.932a.626.626 0 0 0-.885-.885l-5 5a.625.625 0 0 0 0 .885l5 5a.625.625 0 1 0 .885-.885l-3.934-3.933h14.741A.625.625 0 0 0 18.75 10"
        fill="currentColor"
      />
    </svg>
    {{ text }}
    <!-- 右側 icon -->
    <svg
      v-if="hasIcon && iconPos === 'right'"
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="[iconSizeClass, iconClass]"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.25 10a.625.625 0 0 1 .625-.625h14.741l-3.934-3.932a.626.626 0 1 1 .886-.885l5 5a.625.625 0 0 1 0 .885l-5 5a.626.626 0 0 1-.886-.885l3.934-3.933H1.875A.625.625 0 0 1 1.25 10"
        fill="currentColor"
      />
    </svg>
  </NuxtLink>
</template>

<template>
  <div
    :class="[
      'badge centered-flex',
      status,
      circle ? 'badge--circle border-circle' : 'badge--pill border-pill',
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'Badge',
    props: {
      status: {
        type: String as PropType<string>,
        required: true,
      },
      circle: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: false,
      },
    },
  });
</script>

<style lang="stylus">
  .badge
    font-family 'Gilroy-Bold', sans-serif
    color var(--white-color)
    font-size 11px
    height 20px

    &--circle
      width 20px
    &--pill
      width auto
      padding-left 10px
      padding-right 10px
</style>

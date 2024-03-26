<template>
  <img
    src="/public/logo.svg"
    :class="[large ? 'logo--large' : 'logo--small']"
    alt="Logo do App Facilita"
  />
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'Logo',
    props: {
      large: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
    },
  });
</script>

<style lang="stylus" scoped>
  .logo
      &--small
          width 55px
      &--large
          width 116px

  @media screen and (max-width 992px)
    .logo--large
      width 83px

  @media screen and (max-width 768px)
    .logo--small
        width 40px
</style>

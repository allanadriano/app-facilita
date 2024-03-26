<template>
  <div @click="closeModal" class="overlay vw-100 vh-100 position-fixed centered-flex">
    <div
      :class="[
        'modal',
        'white-bg-color',
        'border-rounded',
        'position-relative',
        small ? 'modal--small' : 'modal--medium',
      ]"
      @click.stop
    >
      <span @click="closeModal" v-if="title" class="border-circle position-absolute">
        <img src="../assets/icons/close-icon.svg" alt="Ícone para fechar o modal" />
      </span>

      <h2 v-if="title" class="dark-slate-blue-color">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'Modal',
    props: {
      title: {
        type: String as PropType<string>,
        required: false,
      },
      small: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: false,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  });
</script>

<style lang="stylus" scoped>
  .overlay
      background-color rgba(70, 93, 118, 0.6)
      z-index: 55;
      top 0px
      right 0px

  .modal
      width 100%
      padding 40px
      box-shadow 0px 20px 30px rgba(119, 137, 158, 0.5)

      &--medium
        max-width 660px

      &--small
        max-width 477px

  h2
      font-family 'Gilroy-Bold'
      font-size 25px
      margin-bottom 30px
  span
      top 10px
      right 10px
      padding 10px 14px
      cursor pointer
      transition background-color 0.3s ease, color 0.3s ease

      &:hover
        background-color var(--azure-color)

  @media screen and (max-width 768px)
    .modal
      &--medium,
      &--small
        max-width 90%
</style>

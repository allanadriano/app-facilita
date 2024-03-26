<template>
  <nav
    class="d-flex position-fixed justify-content-end align-items-end white-bg-color box-shadow w-100"
  >
    <div class="d-flex h-100">
      <a
        class="d-flex align-items-center"
        href="https://www.linkedin.com/in/allan-oliveira/"
        target="_blank"
      >
        <span>
          <img
            class="border-circle"
            src="/public/user.jpg"
            alt="Allan Oliveira - Usuário do sistema"
          />
        </span>
        <span>
          <p class="dark-slate-blue-color">Allan Oliveira</p>
          <span class="blue-color"> Front-end Developer </span>
        </span>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Navbar',
  });
</script>

<style lang="stylus" scoped>
  nav
      height 83px
      top 0px
      padding-right 30px
      z-index 1

    img
        width 45px
        margin-right 10px

    a
        text-decoration none

        p
            font-family 'Gilroy-SemiBold', sans-serif
            font-size 15px

        span
            font-family 'Gilroy-SemiBold', sans-serif
            font-size 12px

  @media screen and (max-width: 992px)
    nav
      display none
</style>

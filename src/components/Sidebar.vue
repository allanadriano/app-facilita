<template>
  <div class="sidebar position-fixed d-flex blue-bg-color">
    <RouterLink class="centered-flex" to="/dash">
      <Logo class="logo" :large="false" />
    </RouterLink>

    <ul class="menu d-flex">
      <li>
        <RouterLink class="nav-link d-flex h-100" to="/">
          <img src="../assets/icons/chart-icon.svg" alt="Ícone referente ao Chart" />
          <span>Dashboard</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link d-flex h-100" to="/">
          <img src="../assets/icons/check-circle-icon.svg" alt="Ícone referente à Tarefas" />
          <span>Tarefas</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nav-link d-flex h-100" to="/">
          <img src="../assets/icons/config-icon.svg" alt="Ícone referente às configurações" />
          <span>Configurações</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Logo from './Logo.vue';
  export default defineComponent({
    name: 'Sidebar',
    components: { Logo },
  });
</script>

<style lang="stylus" scoped>
  .sidebar
    width 106px
    z-index 2
    height 100vh
    flex-direction column

    a
      min-height 83px

    ul
      &.menu
        height 100%
        flex-direction column
        justify-content center

        li
          font-family 'Gilroy-Bold', sans-serif
          height 83px
          border-top 1px solid var(--sky-blue-color)
          border-left 1px solid var(--sky-blue-color)
          border-right 1px solid var(--sky-blue-color)
          transition background-color 0.3s ease, color 0.3s ease

          &:last-child
            border-bottom 1px solid var(--sky-blue-color)

          &:hover
            background-color var(--vivid-blue-color)

          a
            &.nav-link
                color var(--white-color)
                text-decoration none
                font-size 12px
                flex-direction column
                align-items center
                justify-content center

                img
                  margin-bottom 5px

  @media screen and (max-width 992px)
    .sidebar
      height 106px
      width 100vw
      flex-direction row
      padding-left 20px
      padding-right 20px


      ul
        &.menu
          flex-direction row
          width 100%

          li
            height 106px
            width 106px

  @media screen and (max-width 768px)
    .sidebar
      height 60px
      overflow-x auto
      padding-left 10px
      padding-right 0px

      a
        min-height 60px


      ul
        &.menu
          justify-content flex-end
          li
            height 60px
            width auto
            padding-left 10px
            padding-right 10px

            a
              &.nav-link
                flex-direction row

                img
                  width 18px
                  margin-bottom 0px
                  margin-right 5px
</style>

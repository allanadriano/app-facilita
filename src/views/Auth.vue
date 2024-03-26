<template>
  <div class="auth row">
    <div class="content--medium centered-flex blue-bg-color">
      <div class="d-flex justify-content-start flex-column">
        <Logo />
        <h1>Facilita<span>Tasks</span></h1>
        <p>Gestão de tarefas pessoais</p>
      </div>
    </div>
    <div class="content--large centered-flex">
      <div class="content--small border-rounded">
        <h2 class="dark-slate-blue-color">Entre com seus dados de acesso.</h2>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Logo from '../components/Logo.vue';
  import LoginForm from '../components/Forms/LoginForm.vue';

  export default defineComponent({
    name: 'Auth',
    components: { Logo, LoginForm },
  });
</script>

<style lang="stylus" scoped>
  .auth
    height 100vh
    width 100vw

    .content
      &--small
        width 100%
        max-width 368px
      &--medium
        width 35%
      &--large
        width 65%

    h1
      color var(--white-color)
      text-transform uppercase
      font-family 'Gilroy-SemiBold', sans-serif
      font-size 48px

      span
        font-family 'Gilroy-Thin', sans-serif

    h2
      font-family 'Gilroy-Bold'
      font-size 18px
      margin-bottom 30px

    p
      color var(--white-color)
      font-family 'Gilroy-Medium', sans-serif
      font-size 16px

  @media screen and (max-width 992px)
    .auth
      display flex
      flex-direction column
      min-height 100vh
      justify-content center
      background-color var(--blue-color)

      .content
        &--medium,
        &--large
          width 100%

        &--medium
          margin-bottom 50px

        &--large
          background-color var(--blue-color)

        &--small
          width 80%
          background var(--white-color)
          box-shadow 0px 3px 20px rgba(130, 153, 166, 0.25)
          padding 30px
</style>

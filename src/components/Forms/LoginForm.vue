<template>
  <form>
    <div class="d-flex flex-column">
      <label> Nome de usuário ou e-mail: </label>
      <input class="form-control" type="text" />
    </div>

    <div class="d-flex flex-column">
      <label>Senha:</label>
      <input class="form-control" type="password" />
    </div>

    <button @click="goDash" type="button" class="btn btn--large green-bg-color w-100">
      Entrar
    </button>

    <span class="d-flex blue-color">Esqueci minha senha</span>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'LoginForm',

    setup() {
      const router = useRouter();

      const goDash = () => {
        router.push('/dash');
      };

      return {
        goDash,
      };
    },
  });
</script>

<style lang="stylus" scoped>
  span
      margin-top 30px
      text-decoration underline
      font-size 13px
      font-family 'Gilroy-SemiBold'
      cursor pointer
</style>

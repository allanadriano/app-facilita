<template>
  <form class="position-relative d-flex" @submit.prevent="search">
    <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar Tarefas" />
    <button type="submit" class="position-absolute">
      <img src="../../assets/icons/search-icon.svg" alt="Botão de ação para busca de tarefas" />
    </button>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'InputSearch',
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      search() {
        if (this.searchTerm.trim() !== '') {
          this.$emit('search', this.searchTerm.trim());
        }
      },
    },
  });
</script>

<style lang="stylus" scoped>
  button
      background-color transparent
      width 55px
      height 51px
      transition background-color 0.3s ease, color 0.3s ease
      top 6px
      right 2px
</style>

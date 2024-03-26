<template>
  <div class="position-relative">
    <span @click="toggleDropdown">
      <img
        src="../assets/icons/action-icon.svg"
        alt="Ícone de ação para editar ou excluir tarefa"
      />
    </span>
    <div
      :class="[
        'dropdown border-rounded box-shadow white-bg-color position-absolute',
        isOpen ? 'd-flex' : 'd-none',
      ]"
    >
      <div class="position-relative">
        <span class="position-absolute" @click="toggleDropdown">
          <img
            src="../assets/icons/action-blue-icon.svg"
            alt="Ícone para fechar dropdown de editar ou excluir tarefa"
          />
        </span>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Actions',
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      closeDropdown(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!this.$el.contains(target)) {
          this.isOpen = false;
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.closeDropdown);
    },
    unmounted() {
      document.removeEventListener('click', this.closeDropdown);
    },
  });
</script>

<style lang="stylus" scoped>
  span
      cursor pointer
      padding 10px
      margin-left 10px
      &.position-absolute
        top 0px
        right 0px
  .dropdown
      right 0px
      top -10px
      width 110px
      div
        &.position-relative
            padding 10px 20px
</style>

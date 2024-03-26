<template>
  <Modal @close="closeModal" small>
    <div class="d-flex align-items-center flex-column">
      <span class="border-circle frost-blue-bg-color centered-flex">
        <img src="../assets/icons/trash-icon.svg" alt="Ícone indicando que uma ação de excluir" />
      </span>
      <div class="d-flex flex-column align-items-center">
        <h2 class="dark-slate-blue-color">
          Tem certeza que deseja <span class="red-color">excluir</span> essa tarefa?
        </h2>
        <p>Essa ação não poderá ser desfeita!</p>
      </div>
      <div class="d-flex justify-content-between action">
        <button @click="closeModal" class="btn green-bg-color" type="button">Cancelar</button>
        <button @click="confirmDeletion" class="btn red-bg-color" type="button">Excluir</button>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
  import { defineComponent, EmitsOptions } from 'vue';
  import Modal from '../components/Modal.vue';

  export default defineComponent({
    name: 'ModalConfirm',
    components: { Modal },
    emits: ['close', 'confirm'] as EmitsOptions,
    methods: {
      closeModal() {
        this.$emit('close');
      },
      confirmDeletion() {
        this.$emit('confirm');
      },
    },
  });
</script>

<style lang="stylus" scoped>
  span
      width 136px
      height 136px
      margin-bottom 20px
  h2
    font-family 'Gilroy-Bold', sans-serif
    font-size 20px
    text-align center
  p
    font-family 'Gilroy-SemiBold', sans-serif
    font-size 15px
    color var(--blue-gray-color)
    margin-bottom 30px
  .action
    width 250px
</style>

<template>
  <form @submit.prevent="submitForm">
    <div class="d-flex flex-column">
      <label>Título:</label>
      <input type="text" v-model="formData.title" class="form-control" />
    </div>
    <div class="d-flex flex-column">
      <label>Descrição:</label>
      <textarea v-model="formData.description" cols="30" rows="10" class="form-control"></textarea>
    </div>
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-start">
        <div class="d-flex align-items-center">
          <input type="radio" value="Urgente" v-model="formData.status" />
          <label>Urgente</label>
        </div>
        <div class="d-flex align-items-center">
          <input type="radio" value="Importante" v-model="formData.status" />
          <label>Importante</label>
        </div>
      </div>
      <button class="btn green-bg-color" type="submit" :disabled="formData.id === '' && !formValid">
        <span v-if="formData.id"> Editar </span>
        <span v-else>Adcionar</span>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { Task } from '../../types/Task';

  export default defineComponent({
    name: 'TaskForm',
    props: {
      initialFormData: {
        type: Object as PropType<Task>,
        default: () => ({ title: '', description: '', status: '' }) as Task,
      },
    },

    data() {
      return {
        formData: { ...this.initialFormData } as Task,
        formValid: false,
      };
    },

    watch: {
      formData: {
        handler() {
          this.formValid =
            this.formData.title.trim() !== '' && this.formData.description.trim() !== '';
        },
        deep: true,
      },
    },

    methods: {
      submitForm() {
        this.$emit('form-submit', this.formData);
        this.formData = { ...this.initialFormData } as Task;
      },
    },
  });
</script>

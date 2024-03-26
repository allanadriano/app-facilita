<template>
  <form
    :class="[
      'task d-flex justify-content-between white-bg-color box-shadow w-100 border-rounded',
      task.completed ? 'completed' : '',
    ]"
  >
    <div class="d-flex align-items-center">
      <input
        type="checkbox"
        v-model="task.completed"
        @change="markTaskCompleted(task)"
        :id="'taskCheckbox_' + task.id"
        :disabled="task.completed"
      />
      <label class="title">{{ task.title }}</label>
    </div>

    <div class="d-flex align-items-center">
      <Badge v-if="task.status === 'Importante'" pill status="yellow-bg-color">Importante</Badge>
      <Badge v-else-if="task.status === 'Urgente'" pill status="red-bg-color">Urgente</Badge>
      <Actions>
        <div
          v-if="!task.completed"
          @click="toggleTaskModal"
          class="action d-flex align-items-center"
        >
          <i class="green-bg-color border-circle box-shadow" />
          <label>Editar</label>
        </div>
        <div @click="toggleConfirmModal" class="action d-flex align-items-center">
          <i class="red-bg-color border-circle box-shadow" />
          <label>Excluir</label>
        </div>
      </Actions>
    </div>
    <Modal
      @close="toggleTaskModal"
      v-model:isOpen="isTaskModalOpen"
      title="Editar Tarefa"
      v-if="isTaskModalOpen"
    >
      <TaskForm :initial-form-data="Object.assign({}, task)" @form-submit="handleEditTask" />
    </Modal>

    <ModalConfirm
      v-if="isModalConfirmOpen"
      @confirm="handleDeleteTask(task.id)"
      @close="toggleConfirmModal"
    />
  </form>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from 'vue';
  import Badge from '../Badge.vue';
  import Actions from '../Actions.vue';
  import Modal from '../Modal.vue';
  import ModalConfirm from '../ModalConfirm.vue';
  import TaskForm from './TaskForm.vue';
  import { Task } from '../../types/Task';
  import { useStore } from 'vuex';

  export default defineComponent({
    name: 'SingleTask',
    components: { Badge, Actions, Modal, ModalConfirm, TaskForm },
    props: {
      task: {
        type: Object as PropType<Task>,
        required: true,
      },
    },

    setup(props) {
      const store = useStore();
      const isTaskModalOpen = ref(false);
      const isModalConfirmOpen = ref(false);

      const toggleTaskModal = () => {
        isTaskModalOpen.value = !isTaskModalOpen.value;
      };

      const toggleConfirmModal = () => {
        isModalConfirmOpen.value = !isModalConfirmOpen.value;
      };

      const handleEditTask = (editedFormData: Task) => {
        store.dispatch('UPDATE_TASK', editedFormData);
        toggleTaskModal();
      };

      const handleDeleteTask = (id: string) => {
        store.dispatch('DELETE_TASK', id);
        toggleConfirmModal();
      };

      const markTaskCompleted = (task: Task) => {
        const updatedTask: Task = { ...task, completed: true };
        store.dispatch('UPDATE_TASK', updatedTask);
      };

      return {
        handleEditTask,
        handleDeleteTask,
        isTaskModalOpen,
        isModalConfirmOpen,
        toggleTaskModal,
        toggleConfirmModal,
        markTaskCompleted,
      };
    },
  });
</script>

<style lang="stylus" scoped>
  .completed
    cursor not-allowed
    input,
    &.task
      opacity 0.7
    input,
    .action
      cursor: not-allowed


    label
      &.title
        text-decoration line-through
  form
      padding 16px
      margin-bottom 10px
  .action
    cursor pointer
    padding 5px
    margin-bottom 5px
    i
      width 9px
      height 9px
      margin-right 5px
    label
      margin-right 0px
      cursor pointer
</style>

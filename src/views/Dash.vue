<template>
  <main class="dash position-relative azure-bg-color">
    <Navbar />
    <div class="d-flex">
      <Sidebar />
      <AsideCategory @filter-tasks="sortTasks" />

      <div class="content w-100 d-flex flex-column">
        <h1 class="dark-slate-blue-color">Minhas Tarefas</h1>
        <p>
          Olá
          <a class="blue-color" href="https://www.linkedin.com/in/allan-oliveira/" target="_blank">
            Allan Oliveira
          </a>
          , você tem
          <span class="blue-color">{{ completedCount }} tarefas </span>
          pendentes.
        </p>

        <InputSearch @search="searchTasks" />

        <div v-if="filteredTasks.length > 0">
          <SingleTask v-for="task in filteredTasks" :key="task.id" :task="task" />
        </div>
        <div v-else>
          <p>Nenhuma tarefa encontrada.</p>
        </div>
      </div>
    </div>

    <button
      @click="toggleTaskModal"
      class="btn-circle position-absolute centered-flex green-bg-color"
      type="button"
    >
      <img
        src="../assets/icons/plus-icon.svg"
        alt="Botão para abrir modal para cadastrar tarefas."
      />
    </button>

    <Modal
      @close="toggleTaskModal"
      v-model:isOpen="isTaskModalOpen"
      title="Cadastrar Tarefa"
      v-if="isTaskModalOpen"
    >
      <TaskForm @form-submit="handleAddTask" />
    </Modal>
  </main>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, computed } from 'vue';
  import Sidebar from '../components/Sidebar.vue';
  import Navbar from '../components/Navbar.vue';
  import AsideCategory from '../components/AsideCategory.vue';
  import InputSearch from '../components/Forms/InputSearch.vue';
  import Modal from '../components/Modal.vue';
  import TaskForm from '../components/Forms/TaskForm.vue';
  import { Task } from '../types/Task';
  import SingleTask from '../components/Forms/SingleTask.vue';
  import { useStore } from 'vuex';
  import { v4 as uuidv4 } from 'uuid';

  export default defineComponent({
    name: 'Dash',
    components: {
      Sidebar,
      Navbar,
      AsideCategory,
      InputSearch,
      Modal,
      TaskForm,
      SingleTask,
    },

    setup() {
      const store = useStore();
      const tasks = ref<Task[]>([]);
      const filteredTasks = ref<Task[]>([]);
      const isTaskModalOpen = ref(false);

      const toggleTaskModal = () => {
        isTaskModalOpen.value = !isTaskModalOpen.value;
      };

      const sortTasks = (sortBy: string) => {
        store.dispatch('SORT_TASKS', sortBy);
      };

      const searchTasks = (searchTerm: string) => {
        store.dispatch('SEARCH_TASKS', searchTerm);
      };

      store.subscribe((mutation) => {
        if (mutation.type === 'SET_TASKS') {
          tasks.value = store.state.tasks.tasks;
        }
      });

      store.watch(
        () => store.state.tasks.tasks,
        (newTasks: Task[]) => {
          tasks.value = newTasks;
          filteredTasks.value = tasks.value;
        },
      );

      const handleAddTask = (formData: Task) => {
        const newTaskWithId: Task = { ...formData, id: uuidv4(), completed: false };
        store.dispatch('ADD_TASK', newTaskWithId);
        toggleTaskModal();
      };

      const completedCount = computed(() => {
        const tasks = store.state.tasks.tasks;
        const tasksCompleted = tasks.filter((task: Task) => task.completed).length;
        return tasks.length - tasksCompleted;
      });

      onMounted(() => {
        store.dispatch('INITIALIZE_STORE');
        tasks.value = store.state.tasks.tasks;
      });

      return {
        isTaskModalOpen,
        toggleTaskModal,
        tasks,
        searchTasks,
        filteredTasks,
        handleAddTask,
        sortTasks,
        completedCount,
      };
    },
  });
</script>

<style lang="stylus" scoped>
  .dash
    z-index 0
    min-height 100vh

    h1
      font-family 'Gilroy-Bold', sans-serif
      font-size 26px
      margin-bottom 8px

    p
      font-family 'Gilroy-SemiBold', sans-serif
      font-size 17px
      color var(--blue-grayish-color)
      margin-bottom 20px

    span
      &.blue-color
        text-decoration underline

    .content
      padding-top 200px
      max-width 633px

  @media screen and (max-width 992px)
    .dash
      min-height cal(100vh + 106px)
    .content
      padding 40px
      margin auto

  @media screen and (max-width 768px)
    .dash
      min-height cal(100vh + 105px)
    .content
      padding 20px
      margin auto
</style>

import { RootState } from '../types/vuex';
import { Module, MutationTree, ActionTree } from 'vuex';
import { Task } from '../../types/Task';

interface TasksState {
  tasks: Task[];
}

const state: TasksState = {
  tasks: [],
};

const mutations: MutationTree<TasksState> = {
  ADD_TASK(state: TasksState, task: Task) {
    state.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },

  UPDATE_TASK(state: TasksState, updateTask: Task) {
    const index = state.tasks.findIndex((task) => task.id === updateTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updateTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },

  DELETE_TASK(state: TasksState, taskId: string) {
    const index = state.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      state.tasks.splice(index, 1);
    }
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },

  SEARCH_TASKS({ state }: { state: TasksState }, searchTerm: string): Task[] {
    const term = searchTerm.toLowerCase();

    return state.tasks.filter((task) => {
      return (
        task.title.toLowerCase().includes(term) || task.description.toLowerCase().includes(term)
      );
    });
  },

  SET_TASKS(state: TasksState, tasks: Task[]) {
    state.tasks = tasks;
  },

  SORT_TASKS(state: TasksState, sortBy: string) {
    switch (sortBy) {
      case 'completed':
        state.tasks.sort((a, b) => (a.completed ? -1 : 1));
        break;
      case 'urgent':
        state.tasks.sort((a, b) => (a.status === 'Urgente' ? -1 : 1));
        break;
      case 'important':
        state.tasks.sort((a, b) => (a.status === 'Importante' ? -1 : 1));
        break;
      case 'other':
        state.tasks.sort((a, b) => {
          const statusA = a.status || '';
          const statusB = b.status || '';
          if (statusA !== statusB) {
            return statusA.localeCompare(statusB);
          }
          return a.title.localeCompare(b.title);
        });
        break;
      default:
        break;
    }
  },

  INITIALIZE_STORE(state: TasksState) {
    const tasksData = localStorage.getItem('tasks');
    if (tasksData) {
      const storedTasks: Task[] = JSON.parse(tasksData);
      state.tasks.push(...storedTasks);
    }
  },
};

const actions: ActionTree<TasksState, RootState> = {
  ADD_TASK({ commit }: any, task: Task) {
    commit('ADD_TASK', task);
  },

  UPDATE_TASK({ commit }: any, updateTask: Task) {
    commit('UPDATE_TASK', updateTask);
  },

  DELETE_TASK({ commit }: any, taskId: string) {
    commit('DELETE_TASK', taskId);
  },

  async INITIALIZE_STORE({ commit }: any) {
    const tasksData = localStorage.getItem('tasks');
    if (tasksData) {
      commit('SET_TASKS', JSON.parse(tasksData));
    }
  },

  SEARCH_TASKS({ commit, state }: any, searchTerm: string) {
    const filteredTasks = state.tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    commit('SET_TASKS', filteredTasks);
  },

  SORT_TASKS({ commit }: any, sortBy: string) {
    commit('SORT_TASKS', sortBy);
  },
};

const tasksModule: Module<TasksState, RootState> = {
  state,
  mutations,
  actions,
};

export default tasksModule;

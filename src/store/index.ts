import { createStore } from 'vuex';
import { RootState } from './types/vuex';
import tasksModule from './modules/tasks';

export const store = createStore<RootState>({
  modules: {
    tasks: tasksModule,
  },
});

import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface State {
    tasks: Task[];
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

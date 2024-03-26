<template>
  <aside class="d-flex ice-blue-bg-color box-shadow">
    <h2 class="slate-blue-color">Categorias</h2>
    <ul class="dark-slate-blue-color">
      <li @click="sortTasks('all')">
        <i class="chevron-icon" />
        <span>Todas</span>
      </li>
      <li @click="sortTasks('urgent')">
        <i class="chevron-icon" />
        <span>Urgentes</span>
        <Badge v-if="urgentCount > 0" circle status="red-bg-color">{{ urgentCount }}</Badge>
      </li>
      <li @click="sortTasks('important')">
        <i class="chevron-icon" />
        <span>Importantes</span>
        <Badge v-if="importantCount > 0" circle status="yellow-bg-color">{{
          importantCount
        }}</Badge>
      </li>
      <li @click="sortTasks('other')">
        <i class="chevron-icon" />
        <span>Outras</span>
      </li>
      <li @click="sortTasks('completed')">
        <i class="chevron-icon" />
        <span>Finalizadas</span>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
  import { defineComponent, EmitsOptions, computed } from 'vue';
  import Badge from './Badge.vue';
  import { useStore } from 'vuex';
  import { Task } from '../types/Task';

  export default defineComponent({
    name: 'AsideCategory',
    components: { Badge },
    emits: ['filter-tasks'] as EmitsOptions,
    setup({ emit }) {
      const sortTasks = (sortBy: string) => {
        emit('filter-tasks', sortBy);
      };

      const store = useStore();

      const urgentCount = computed(() => {
        const tasks = store.state.tasks.tasks;
        return tasks.filter((task: Task) => task.status === 'Urgente').length;
      });

      const importantCount = computed(() => {
        const tasks = store.state.tasks.tasks;
        return tasks.filter((task: Task) => task.status === 'Importante').length;
      });

      return { sortTasks, urgentCount, importantCount };
    },
  });
</script>

<style lang="stylus" scoped>
  aside
      width 227px
      margin-left 83px
      margin-right 310px
      flex-direction column
      justify-content center
      align-items center
      height 100vh

  h2
      font-family 'Gilroy-Bold', sans-serif
      font-size 17px
      margin-bottom 40px

  ul
      li
        display flex
        align-items center
        font-family 'Gilroy-SemiBold', sans-serif
        font-size 15px
        padding: 8px 12px
        cursor pointer
        transition background-color 0.3s ease, color 0.3s ease
        margin-bottom 5px

        span
          margin-right 5px

        &:hover
          color var(--blue-color)

          i
            background-color var(--blue-color)


        i
            margin-right 8px

  @media screen and (max-width 992px)
    aside
      margin-left 0px
      margin-right 0px
      width 150px

  @media screen and (max-width 768px)
    aside
      width 100vw
      height 45px
      position fixed
      margin-top 60px
      overflow-x auto

      h2
        display none

      ul
        display flex
        flex-direction row
        height 100%
        align-items center

        li
          display inline-flex
          font-size 11px
          background-color var(--azure-color)
          border-radius 24px
          margin-right 8px
          margin-bottom 0px

          i
            display none
</style>

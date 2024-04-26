<script setup lang="ts">
    import { getCurrentInstance } from 'vue';
    import { useRouter } from 'vue-router';
    import { ContextManager } from '@/utils/manager';

    ContextManager.InitialConfig(
        getCurrentInstance()?.appContext.config,
        useRouter());
</script>

<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

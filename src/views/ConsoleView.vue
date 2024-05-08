<script setup lang="ts">
    import Aside from '@/views/Console/AsideView.vue';
    import Header from '@/views/Console/HeaderView.vue';
    import Main from '@/views/Console/MainView.vue';
</script>

<template>
    <el-container id="menu">
        <el-aside id="side" width="250px">
            <Aside />
        </el-aside>
        <el-container>
            <el-header id="header" height="100px"><Header /></el-header>
            <el-main id="context"><Main /></el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
    #menu {
        height: 100vh;
    }

    #header {
        background-color: #77bc99;
    }

    #context {
        background-color: #f7f7f7;
    }

    #side {
        background-color: #344a5f;
    }
</style>

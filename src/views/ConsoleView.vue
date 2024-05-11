<script setup lang="ts">
    import Aside from '@/views/Console/AsideView.vue';
    import Header from '@/views/Console/HeaderView.vue';
    import Main from '@/views/Console/MainView.vue';
    import AsideMainView from '@/views/Console/AsideMainView.vue';
</script>

<template>
    <el-container class="home" id="menu">
        <!--<el-aside class="left" width="50px">
            <AsideMainView />
        </el-aside>-->
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
    .left {
        background-color: #1e2a8a;
    }

    #menu {
        height: 100vh;
    }

    #header {
        background-color: #77bc99;
    }

    #context {
        //background-color: #f7f7f7;
        background-color: gainsboro;
        background-image: radial-gradient(gainsboro, rgba(255, 1, 0, 0.5));
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    #side {
        background-color: #344a5f;
    }
</style>

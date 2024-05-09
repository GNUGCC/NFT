<script setup lang="ts">
</script>

<template>
    <div class="layout-header">
        <span class="title">後台選單</span>
    </div>
    <el-menu background-color="#0000FF" active-text-color="#FFFF00" text-color="#fff" :ellipsis="false" router>
        <el-menu-item>
            <template #title>
                <span class="mycard">MyCard 點數序號</span>                
            </template>
        </el-menu-item>
        <el-menu-item>
            <template #title>
                <span class="mycard">MyCard 點數序號</span>
            </template>
        </el-menu-item>
        <el-menu-item>
            <template #title>
                <el-alert title="MyCard 購買記錄" type="error" :closable="false" effect="dark" center show-icon />
            </template>
        </el-menu-item>
        <el-sub-menu>
            <template #title>
                <el-alert title="MyCard 購買記錄" type="success" :closable="false" effect="dark" center show-icon />
            </template>
            <el-menu-item>
                <template #title>
                    <el-alert title="MyCard 購買記錄" type="info" :closable="false" effect="dark" center show-icon />
                </template>
            </el-menu-item>
            <el-menu-item>
                <template #title>
                    <el-alert title="MyCard 購買記錄" type="error" :closable="false" effect="dark" center show-icon />
                </template>
            </el-menu-item>
            <el-menu-item>
                <template #title>
                    <el-alert title="MyCard 購買記錄" type="success" :closable="false" effect="light" center show-icon />
                </template>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style lang="scss" scoped>
    .el-menu-item {
        --el-menu-hover-bg-color: rgb(0, 155, 204);
    }

    .mycard {
        //min-width: 500px !important;
        background-color: palegreen;
        color: blue;
        font-size: 20px;
        align-items: center;
    }

    .title {
        width: 200px;
        font-size: 15px;
        font-weight: bolder;
    }

    .el-menu {
        border-right: none;
    }

    .png {
        padding: 10px 10px;
        border-bottom: 1px solid #2d4153;

        img {
            width: 20%;
            height: 100%;
            margin: auto;
        }
    }

    .layout-header {
        position: relative;
        //z-index 10;
        background-color: #fff;
        //@include webkit(border-radius, 50px);
    }

    .png-warp {
        //height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }
</style>
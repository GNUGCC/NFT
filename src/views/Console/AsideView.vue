<script setup lang="ts">
    import IconItem from '@/components/IconItem.vue';
    import ConsoleMyCard from '@/components/ConsoleMyCard.vue';
    import ConsoleNft from '@/components/ConsoleNft.vue';
    import { Logout } from '@/modules/home';
</script>

<template>
    <div class="layout-header">
        <span class="title">後台選單</span>
    </div>
    <el-menu class="mycard" active-text-color="#fff" background-color="#344a5f" text-color="#fff" :ellipsis="false" router>
        <el-sub-menu index="0">
            <template #title>
                <icon-item class="item" title="MyCard" icon="discount"></icon-item>
            </template>
            <ConsoleMyCard />
        </el-sub-menu>
        <!--<el-sub-menu index="1">
            <template #title>
                <div class="mycard">
                    <icon-item title="NFT" icon="hide"></icon-item>
                </div>
            </template>
            <ConsoleNft />
        </el-sub-menu>-->
        <el-menu-item @click="Logout">
            <template #title>
                <icon-item title="登出" icon="search"></icon-item>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<style lang="scss" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .is-active {
        .el-menu-item {
            background-color: #808080;
        }
    }

    .item {
        font-size: 20px;
    }

    .mycard {
        padding: 0;
        //margin: 0, auto;
        font-weight: bolder;
        align-items: center;
    }

    .el-sub-menu {
        --el-menu-hover-bg-color: rgb(0, 155, 204);
        //width: 180px;
    }

    .el-menu-item {
        --el-menu-hover-bg-color: rgb(0, 155, 204);
        //width: 180px;
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
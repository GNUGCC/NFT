<script setup lang="ts">
    import IconItem from '@/components/IconItem.vue';
</script>

<template>
    <el-menu class="left" active-text-color="#ffffff" background-color="#344a5f" text-color="#fff" :ellipsis="false" collapse>
        <el-menu-item index="2">
            <icon-item class="icon" icon="discount"></icon-item>
            <template #title>
                <span class="item">MyCard 相關功能</span>
            </template>
        </el-menu-item>
        <el-menu-item index="2">
            <icon-item class="item" icon="search"></icon-item>
            <template #title>
                MyCard 相關功能
            </template>
        </el-menu-item>
        <el-menu-item index="2">
            <icon-item class="item" icon="hide"></icon-item>
            <template #title>
                MyCard 相關功能
            </template>
        </el-menu-item>
    </el-menu>
</template>

<style lang="scss" scoped>
    .left {
        padding: 0;
        width: 10px;
    }

    .el-sub-menu {
        --el-menu-hover-bg-color: rgb(0, 155, 204);
        width: 1px;
    }

    .item {
        //font-size: 120px;
    }

    .el-menu-item:hover {
        --el-menu-hover-bg-color: #1e2a8a;
        //font-size: 20px;
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
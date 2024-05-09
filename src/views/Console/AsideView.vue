<script setup lang="ts">
    import IconItem from '@/components/IconItem.vue';
</script>

<template>
    <div class="layout-header">
        <span class="title">後台選單</span>
    </div>
    <el-menu active-text-color="#ffffff" background-color="#344a5f" text-color="#fff" :ellipsis="false" router>
        <el-sub-menu index="0">
            <template #title>
                <div class="mycard">
                    <icon-item title="MyCard" icon="discount"></icon-item>
                </div>                
            </template>
            <el-menu-item>
                <template #title>
                    <icon-item title="新增 MyCard 序號" icon="avatar"></icon-item>
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index ="1">
            <template #title>
                <div class="mycard">
                    <icon-item title="NFT" icon="hide"></icon-item>
                </div>
            </template>
            <el-menu-item>
                <template #title>
                    <icon-item title="NFT 點數序號" icon="info-filled"></icon-item>
                </template>
            </el-menu-item>
        </el-sub-menu>    
        <el-menu-item>
            <template #title>
                <icon-item title="登出" icon="search"></icon-item>
            </template>
        </el-menu-item>
    </el-menu>
</template>

<style lang="scss" scoped>
    .mycard {
        font-weight: bold;
        align-items: center;
    }

    .el-menu-item {
        --el-menu-hover-bg-color: rgb(0, 155, 204);
        width: 180px;
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
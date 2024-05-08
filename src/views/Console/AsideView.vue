<script setup lang="ts">
</script>

<template>
    <div class="layout-header">
        <span>選單</span>
    </div>
    <el-menu active-text-color="#ffffff" background-color="#344a5f" text-color="#fff" router>
        <el-menu-item>
            <template #title>
                <h1>選單1</h1>
            </template>            
        </el-menu-item>
        <el-menu-item>
            <template #title>
                <h1>選單2</h1>
            </template>
        </el-menu-item>
        <el-menu-item>
            <template #title>
                <h1>選單3</h1>
            </template>
        </el-menu-item>
        <el-sub-menu>
            <template #title>
                <h1>其他功能</h1>
            </template>
            <el-menu-item>
                <template #title>
                    <h1>選單3</h1>
                </template>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>    
</template>

<style lang="scss" scoped>
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
<script setup lang="ts">
    import Point from './Point.vue';
    import Member from './Member.vue';
    import Console from './Console/Console.vue';
    import IconItem from './IconItem.vue';
</script>

<template>
    <el-menu class="fixed-top header"
             mode="horizontal"
             :ellipsis="false"
             menu-trigger="hover"
             background-color="#0000FF"
             active-text-color="#FFFF00"
             text-color="#fff"
             router>
        <div class="flex-grow" />
        <el-sub-menu class="console" index="1">
            <template #title>
                <icon-item title="後台管理" icon="aim"></icon-item>
            </template>
            <console />
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <icon-item title="點數管理" icon="discount"></icon-item>
            </template>
            <point />
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <icon-item title="會員專區" icon="avatar"></icon-item>                
            </template>
            <member />
        </el-sub-menu>
    </el-menu>   
</template>

<style lang="scss">
    .console {
        --el-menu-text-color: black;
    }

    .el-menu-item {
        --el-menu-hover-bg-color: rgb(0, 155, 204);
    }

    .flex-grow {
        flex-grow: 1;
    }

    .header {
        font-weight: bold;
    }

    .btn {
        width: 10%;
    }  
</style>
<script setup lang="ts">
    import IconItem from '@/components/IconItem.vue';
</script>

<template>
    <el-menu-item index="/console/mycardpool">
        <template #title>
            <icon-item title="查詢序號池" icon="search"></icon-item>
        </template>
    </el-menu-item>
    <el-menu-item index="/console/newmycard">
        <template #title>
            <icon-item title="新增序號" icon="star-filled"></icon-item>
        </template>
    </el-menu-item>
</template>
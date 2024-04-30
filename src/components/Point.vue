<script setup lang="ts">
    import IconItem from './IconItem.vue';
    import { Info } from '@/modules/point/info';
    import { AddNTF } from '@/modules/point/ntf';
    import { AddMyCard } from '@/modules/point/mycard';    
</script>

<template>
    <el-menu-item :index="Info">
        <icon-item title="MyCard 購買記錄" icon="hide"></icon-item>
    </el-menu-item>
    <el-menu-item :index="AddNTF">
        <icon-item title="加購 NFT 點數" icon="plus"></icon-item>
    </el-menu-item>
    <el-menu-item :index="AddMyCard">
        <icon-item title="加購 MyCard 點數" icon="circle-plus-filled"></icon-item>
    </el-menu-item>
</template>
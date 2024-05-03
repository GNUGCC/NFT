<script setup lang="ts">
    import IconItem from './IconItem.vue';
    import { Info } from '@/modules/point/info';
    import { AddNFT, QueryNFT } from '@/modules/point/nft';
    import { AddMyCard } from '@/modules/point/mycard';    
</script>

<template>
    <el-menu-item :index="Info">
        <icon-item title="MyCard 購買記錄" icon="hide"></icon-item>
    </el-menu-item>
    <el-menu-item :index="AddNFT">
        <icon-item title="加購 NFT 點數" icon="plus"></icon-item>
    </el-menu-item>
    <el-menu-item :index="AddMyCard">
        <icon-item title="加購 MyCard 點數" icon="circle-plus-filled"></icon-item>
    </el-menu-item>
    <el-menu-item disabled><el-divider /></el-menu-item>
    <el-menu-item :index="QueryNFT">
        <icon-item title="查詢 NTF 點數" icon="search"></icon-item>
    </el-menu-item>
</template>
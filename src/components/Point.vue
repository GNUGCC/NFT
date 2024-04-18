<script setup lang="ts">
    import { defineProps } from 'vue';
    import { AddNTF } from '@/modules/logic/ntf';
    import { AddMyCard } from '@/modules/logic/mycard';
    import IconItem from './IconItem.vue';

    const props = defineProps<{ index: string }>();
</script>

<template>
    <el-menu-item @click="AddNTF(member)">
        <icon-item title="消費記錄" icon="hide"></icon-item>
    </el-menu-item>
    <el-menu-item @click="AddNTF(member)">
        <icon-item title="加購 NFT 點數" icon="plus"></icon-item>
    </el-menu-item>
    <el-menu-item @click="AddMyCard(member)">
        <icon-item title="加購 MyCard 點數" icon="circle-plus-filled"></icon-item>
    </el-menu-item>
</template>
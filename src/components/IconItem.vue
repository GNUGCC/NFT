<script setup lang="ts">
    import { defineProps } from 'vue';
    import { Discount, Search, Avatar, Edit, InfoFilled, Plus, StarFilled, Histogram, CirclePlusFilled, Hide } from '@element-plus/icons-vue';

    const props = defineProps<{
        icon: string,
        title: string
    }>();
</script>

<template>
    <template v-if="props.icon == 'discount'">
        <el-icon><discount /></el-icon>
    </template>
    <template v-if="props.icon == 'avatar'">
        <el-icon><avatar /></el-icon>
    </template>
    <template v-if="props.icon == 'edit'">
        <el-icon><edit /></el-icon>
    </template>
    <template v-if="props.icon == 'info-filled'">
        <el-icon><info-filled /></el-icon>
    </template>
    <template v-if="props.icon == 'plus'">
        <el-icon><plus /></el-icon>
    </template>
    <template v-if="props.icon == 'circle-plus-filled'">
        <el-icon><circle-plus-filled /></el-icon>
    </template>
    <template v-if="props.icon == 'hide'">
        <el-icon><hide /></el-icon>
    </template>
    <template v-if="props.icon == 'search'">
        <el-icon><search /></el-icon>
    </template>
    <template v-if="props.icon == 'star-filled'">
        <el-icon><star-filled /></el-icon>
    </template>
    <template v-if="props.icon == 'histogram'">
        <el-icon><histogram /></el-icon>
    </template>
    <template v-if="props.title">
        <span>{{props.title}}</span>
    </template>
</template>
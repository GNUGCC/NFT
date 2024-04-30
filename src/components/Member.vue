<script setup lang="ts">
    import IconItem from './IconItem.vue';
    import { Edit } from '@/modules/member/edit';    
    import { Order } from '@/modules/member/order';
    import { Logout } from '@/modules/common';
</script>

<template>
    <el-menu-item :index="Edit">
        <icon-item title="修改會員資料" icon="edit"></icon-item>
    </el-menu-item>
    <el-menu-item :index="Order">
        <icon-item title="訂單狀態" icon="info-filled"></icon-item>
    </el-menu-item>
    <el-menu-item @click="Logout">
        <icon-item title="登出" icon="hide"></icon-item>
    </el-menu-item>
</template>
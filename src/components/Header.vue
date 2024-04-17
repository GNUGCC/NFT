<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import { MemberType } from '@/models/member';
    import { Update, LogOut } from './header';

    const props = defineProps<MemberType>();
    const member = computed(() => props);
</script>

<template>
    <el-menu :default-active="2"
             class="fixed-top header"
             mode="horizontal"
             :ellipsis="false"             
             menu-trigger="click"
             background-color="#0000FF"
             text-color="#fff"           
             router>
        <div class="flex-grow" />
        <el-sub-menu index="2">
            <template #title>
                會員功能
            </template>
            <el-menu-item :index="Update(member)">修改會員資料</el-menu-item>
            <el-menu-item @click="LogOut(member)">登出</el-menu-item>
        </el-sub-menu>
    </el-menu>   
</template>

<style lang="scss" scoped>
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
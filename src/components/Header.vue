<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import { MemberType } from '@/models/member';
    import { AddNFT, AddMyCard, Update, LogOut } from './header';
    import { Discount, Avatar, Edit, InfoFilled, Plus, CirclePlusFilled, Hide } from '@element-plus/icons-vue';

    const props = defineProps<MemberType>();
    const member = computed(() => props);
</script>

<template>
    <el-menu
             class="fixed-top header"
             mode="horizontal"
             :ellipsis="false"             
             menu-trigger="hover"
             background-color="#0000FF"
             active-text-color="#33ab3ff"
             text-color="#fff"           
             router>
        <div class="flex-grow" />
        <el-sub-menu index="1">            
            <template #title>
                <el-icon><discount /></el-icon>
                點數管理
            </template>
            <el-menu-item @click="AddNFT(member)">
                <el-icon><plus /></el-icon>
                加購<span>NFT</span>點數
            </el-menu-item>
            <el-menu-item @click="AddMyCard(member)">
                <el-icon><circle-plus-filled /></el-icon>
                加購<span>MyCard</span>點數
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon><avatar /></el-icon>
                會員功能
            </template>
            <el-menu-item :index="Update(member)">
                <el-icon><edit /></el-icon>
                修改會員資料
            </el-menu-item>
            <el-menu-item index="/info/testid">
                <el-icon><info-filled /></el-icon>
                顯示會員資訊
            </el-menu-item>            
            <el-menu-item @click="LogOut(member)">
                <el-icon><hide /></el-icon>
                登出
            </el-menu-item>
        </el-sub-menu>
    </el-menu>   
</template>

<style lang="scss" scoped>
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
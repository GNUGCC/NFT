<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import { MemberType } from '@/models/member';
    import { AddNFT, AddMyCard, Update, LogOut } from './header';
    import IconItem from './IconItem.vue';
    //import { Discount, Avatar, Edit, InfoFilled, Plus, CirclePlusFilled, Hide } from '@element-plus/icons-vue';

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
             active-text-color="#FFFF00"
             text-color="#fff"           
             router>
        <div class="flex-grow" />
        <el-sub-menu index="1">            
            <template #title>
                <icon-item title="點數管理" icon="discount"></icon-item>
            </template>
            <el-menu-item @click="AddNFT(member)">
                <icon-item title="加購 NFT 點數" icon="plus"></icon-item>
                <el-icon><plus /></el-icon>
            </el-menu-item>
            <el-menu-item @click="AddMyCard(member)">
                <icon-item title="加購 MyCard 點數" icon="circle-plus-filled"></icon-item>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <icon-item title="會員功能" icon="avatar"></icon-item>
            </template>
            <el-menu-item :index="Update(member)">
                <icon-item title="修改會員資料" icon="edit"></icon-item>
            </el-menu-item>
            <el-menu-item index="/info/testid">
                <icon-item title="顯示會員資訊" icon="info-filled"></icon-item>
            </el-menu-item>            
            <el-menu-item @click="LogOut(member)">
                <icon-item title="登出" icon="hide"></icon-item>
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
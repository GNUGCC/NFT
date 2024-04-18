<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import IconItem from './IconItem.vue';
    import { Edit } from '@/modules/member/edit';    
    import { Detail } from '@/modules/member/detail';
    import { Logout } from '@/modules/common';
    import { type MemberType } from '@/models/member';    

    const props = defineProps<{
        index: string
        data: MemberType
    }>();

    const member = computed(() => props.data);
</script>

<template>
    <template v-if="member">
        <el-menu-item :index="Edit(member)">
            <icon-item title="修改會員資料" icon="edit"></icon-item>
        </el-menu-item>
        <el-menu-item :index="Detail(member)">
            <icon-item title="顯示會員資訊" icon="info-filled"></icon-item>
        </el-menu-item>
        <el-menu-item @click="Logout(member)">
            <icon-item title="登出" icon="hide"></icon-item>
        </el-menu-item>
    </template>    
    <template v-else>
        <span class="notfound">沒有會員資料</span>
    </template>
</template>

<style lang="scss" scoped>
    .notfound {
        font-weight: bolder;
        font-size: 20px;
        background-color: white;
        color: red;
    }
</style>

<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import { Info } from '@/modules/point/info';
    import { AddNTF } from '@/modules/point/ntf';
    import { AddMyCard } from '@/modules/point/mycard';
    import IconItem from './IconItem.vue';
    import { MemberType } from '../models/member';

    const props = defineProps<{ data: MemberType }>();
    const member = computed(() => props.data);
</script>

<template>
    <template v-if="member">
        <el-menu-item :index="Info(member)">
            <icon-item title="消費記錄" icon="hide"></icon-item>
        </el-menu-item>
        <el-menu-item :index="AddNTF(member)">
            <icon-item title="加購 NFT 點數" icon="plus"></icon-item>
        </el-menu-item>
        <el-menu-item :index="AddMyCard(member)">
            <icon-item title="加購 MyCard 點數" icon="circle-plus-filled"></icon-item>
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

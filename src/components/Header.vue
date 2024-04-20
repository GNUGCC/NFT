<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import Point from './Point.vue';
    import Member from './Member.vue';
    import IconItem from './IconItem.vue';
    import { type MemberType } from '@/models/member';

    const props = defineProps<{ member: MemberType }>();
    const member = computed(() => props.member);
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
            <point :data="member" />
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <icon-item title="會員專區" icon="avatar"></icon-item>
            </template>
            <member :data="member" />        
        </el-sub-menu>
    </el-menu>   
</template>

<style lang="scss">
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
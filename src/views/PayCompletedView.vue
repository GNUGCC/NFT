<script setup lang="ts">
    import { Home } from '@/modules/common';
</script>

<template>
    <el-card class="card" shadow="hover" width="500px">
        <template #header>
            <span class="title">MyCard 訂單訊息</span>
        </template>
        <el-alert class="pay" title="系統已完成建立訂單" description="請於付款頁面內完成付款可查詢訂單狀態，再次感謝您的訂購" type="success" :closable="false" effect="light" center show-icon />
        <el-button type="primary" class="button" @click="Home" round>確定</el-button>
    </el-card>
</template>

<style lang="scss" scoped>
    .title {
        font-weight: bolder;
        font-size: 20px;
    }

    .pay {
        font-weight: bolder;
        font-size: 20px;
    }

    .card {
        width: 40%;
        margin: auto;
    }
</style>
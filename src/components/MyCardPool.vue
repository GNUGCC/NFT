<script setup lang="ts">
    import { QueryMyCardPool, Console } from '@/modules/point/console/mycard';
</script>

<template>
        <el-card class="card" shadow="hover">
            <template #header>
                <el-alert title="MyCard 序號池庫存狀態(測試資料)" type="error" :closable="false" effect="dark" center show-icon />
                <span>查詢共有 {{QueryMyCardPool.length}} 張卡片</span>
            </template>
            <el-scrollbar height="300px">
                <el-table :data="QueryMyCardPool" style="width: 100%" align="center">
                    <el-table-column label="卡號" width="100%" align="center">
                        <template #default="{ row }">
                            <span>{{ row.id }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="序號" width="300px" align="center">
                        <template #default="{ row }">
                            <span>{{ row.serial }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="密鑰" width="300px" align="center">
                        <template #default="{ row }">
                            <span>{{ row.token }}</span>
                        </template>
                    </el-table-column>
                    <template #empty>
                        <el-alert title="序號池內沒有任何可用的 MyCard 序號" type="error" :closable="false" effect="light" center />
                    </template>
                </el-table>
            </el-scrollbar>
            <el-button type="primary" class="button" @click="Console" round>確定</el-button>
        </el-card>
</template>

<style lang="scss" scoped>
    .el-alert {
        margin: 20px 0 0;
    }

    .el-alert:first-child {
        margin: 0;
    }

    .title {
        font-weight: bolder;
        font-size: 20px;
    }

    .button {
        margin-top: 5px;
    }

    .point {
        font-weight: bolder;
        float: right;
        color: blue;
    }

    .pay {
        font-weight: bolder;
        font-size: 20px;
    }

    .price {
        font-weight: bolder;
    }

    .error {
        font-weight: bolder;
        color: red;
    }

    .mycard {
        font-weight: bolder;
    }

    .card {
        width: 70%;
        margin: auto;
        //max-height: 150px !important;
        font-weight: bolder;
        //background-color: blue !important;
    }
</style>
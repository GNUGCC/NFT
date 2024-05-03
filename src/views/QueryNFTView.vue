<script setup lang="ts">    
    import { RouteManager } from '@/utils/';
    import { QueryNFTPoint } from '@/modules/point/nft';
    import { Orders, Home } from '@/modules/member/order';    
</script>

<template>
    <el-card class="card" shadow="hover">
        <template #header>

        </template>
        <el-table :data="QueryNFTPoint" style="width: 100%" align="center">
            <el-table-column label="購買內容" width="100%" align="center">
                <template #default="{ row }">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>id: {{ row.id }}</div>
                            <div>status: {{ row.status }}</div>
                        </template>
                        <template #reference>
                            <el-tag>{{ row.id }}</el-tag>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>    
        </el-table>
        <el-button type="primary" class="info" @click="Home" plain>確定</el-button>
    </el-card>    
</template>

<style lang="scss" scoped>
    .info {
        width: 100px;
        margin-top: 15px;
    }

    .card {
        width: 40%;
        margin: auto;
    }

    .point {
        font-weight: bold;
        font-size: 15px;
    }

    .info {
        font-weight: bolder;
        text-align: center;
    }
</style>
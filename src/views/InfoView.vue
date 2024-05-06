<script setup lang="ts">
    import { RouteManager } from '@/utils/';
    import { MyCardInfo, Home } from '@/modules/point/info';    
</script>

<template>
    <el-card class="card" shadow="hover">        
        <template #header>
            <el-alert title="MyCard 購買記錄" type="success" :closable="false" effect="light" center show-icon />
        </template>
        <el-table :data="MyCardInfo" style="width: 100%" align="center">
            <el-table-column label="購買內容" width="100%" align="center">
                <template #default="{ row }">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <span>id: {{ row.id }}</span>
                            <span>status: {{ row.mycard_data }}</span>
                        </template>
                        <template #reference>
                            <el-tag>{{ row.mycard_data }}</el-tag>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="付款金額" width="100%" align="right">
                <template #default="{ row }">
                    <span>{{ row.mycard_point }}</span>
                </template>
            </el-table-column>
            <!--<el-table-column label="狀態" width="100%" align="center">
                <template #default="{ row }">
                    <span>{{ row.status }}</span>
                </template>
            </el-table-column>
            <el-table-column label="有效日期" width="100%" align="center">
                <template #default="{ row }">
                    <span>{{ row.available_date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="建立日期" width="100%" align="center">
                <template #default="{ row }">
                    <span>{{ row.available_date }}</span>
                </template>
            </el-table-column>-->
            <template #empty>
                沒有訂單資料
            </template>
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
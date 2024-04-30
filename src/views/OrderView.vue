<script setup lang="ts">
    import { RouteManager } from '@/utils/';
    import { Orders, Home } from '@/modules/member/order';    
</script>

<template>
    <el-card class="card" shadow="hover">
        <template #header>
            <template v-if="true">
                <el-alert title="MyCard 訂單記錄(測試資料)" :type="warning" :closable="false" effect="dark" center show-icon />
            </template>
            <template v-else>
                <el-alert title="MyCard 訂單記錄" type="info" :closable="false" effect="light" center show-icon />
            </template>                    
        </template>
        <el-table :data="Orders" style="width: 100%" align="center">
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
            <el-table-column label="付款金額" width="100%" align="right">
                <template #default="{ row }">
                    <span>{{ row.amount }}</span>
                </template>
            </el-table-column>
            <el-table-column label="狀態" width="100%" align="center">
                <template #default="{ row }">
                    <span>{{ row.status }}</span>
                    <!--<el-button size="small" @click="handleEdit(row)">Edit</el-button>
                    <el-button size="small"
                               type="danger"
                               @click="handleDelete(row)">Delete</el-button>-->
                </template>
            </el-table-column>
            <el-table-column label="有效日期" width="100%" align="center">
                <template #default="{ row }">
                    <span>{{ row.available_date }}</span>
                    <!--<el-button size="small" @click="handleEdit(row)">Edit</el-button>
                    <el-button size="small"
                               type="danger"
                               @click="handleDelete(row)">Delete</el-button>-->
                </template>
            </el-table-column>
            <el-table-column label="建立日期" width="100%" align="center">
                <template #default="{ row }">
                    <span>{{ row.available_date }}</span>
                    <!--<el-button size="small" @click="handleEdit(srow)">Edit</el-button>
                    <el-button size="small"
                               type="danger"
                               @click="handleDelete(row)">Delete</el-button>-->
                </template>
            </el-table-column>
            <template #empty>沒有訂單資料</template>
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
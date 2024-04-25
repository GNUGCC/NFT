<script setup lang="ts">
    import { RouteManager } from '@/utils/';
    import { Orders } from '@/modules/member/order';
    const Home = () => RouteManager.Home();
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
        <el-table :data="Orders" style="width: 100%">
            <el-table-column label="購買內容" width="180">
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
            <el-table-column label="付款金額" width="180">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ row.amount }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="狀態">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ row.status }}</span>
                    </div>
                    <!--<el-button size="small" @click="handleEdit(row)">Edit</el-button>
                    <el-button size="small"
                               type="danger"
                               @click="handleDelete(row)">Delete</el-button>-->
                </template>
            </el-table-column>
            <el-table-column label="有效日期">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ row.available_date }}</span>
                    </div>
                    <!--<el-button size="small" @click="handleEdit(row)">Edit</el-button>
                    <el-button size="small"
                               type="danger"
                               @click="handleDelete(row)">Delete</el-button>-->
                </template>
            </el-table-column>
            <el-table-column label="建立日期">
                <template #default="{ row }">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ row.available_date }}</span>
                    </div>
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
        width: 100%;
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
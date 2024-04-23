<script setup lang="ts">
    import { RouteManager } from '@/utils/';
    import type { OrderStatusType } from '@/models/member';
    const orders: OrderStatusType[] = [
        {
            id: '1',
            amount: '1000',
            m_id: '1',
            content: '',
            status: '訂單成立',
            available_date: '2024/4/15',
            build_time: '2024/4/15'
        },
        {
            id: '2',
            amount: '2000',
            m_id: '2',
            content: '',
            status: '付款成功',
            available_date: '2024/4/16',
            build_time: '2024/4/16'
        },
        {
            id: '3',
            amount: '2500',
            m_id: '3',
            content: '',
            status: '付款成功',
            available_date: '2024/4/17',
            build_time: '2024/4/17'
        },
        {
            id: '4',
            amount: '500',
            m_id: '4',
            content: '',
            status: '付款失敗',
            available_date: '2024/4/18',
            build_time: '2024/4/18'
        },
        {
            id: '5',
            amount: '13000',
            m_id: '5',
            content: '',
            status: '付款成功',
            available_date: '2024/4/23',
            build_time: '2024/4/23'
        }
    ];

    const Home = () => RouteManager.Home();
</script>

<template>
    <el-table :data="orders" style="width: 100%">
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
    </el-table>
    <el-button type="primary" @click="Home" style="width: 100px; margin-top: 5px;" plain>確定</el-button>
</template>

<style lang="scss" scoped>
    .card {
        width: 300px;
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
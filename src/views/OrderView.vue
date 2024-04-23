<script setup lang="ts">
    import type { OrderStatusType } from '@/models/member';
    const orders: OrderStatusType[] = [
        {
            id: '1',
            amount: 'test1',
            m_id: '1',
            content: '',
            status: '0',
            available_date: ''
        },
        {
            id: '2',
            amount: 'test2',
            m_id: '2',
            content: '',
            status: '1',
            available_date: ''
        },
        {
            id: '3',
            amount: 'test3',
            m_id: '3',
            content: '',
            status: '1',
            available_date: ''
        },
        {
            id: '4',
            amount: 'test4',
            m_id: '4',
            content: '',
            status: '3',
            available_date: ''
        },
        {
            id: '5',
            amount: 'test5',
            m_id: '5',
            content: '',
            status: '1',
            available_date: ''
        }
    ];

    interface User {
        date: string
        name: string
        address: string
    }

    const handleEdit = (index: number, row: User) => {
        console.log(index, row)
    }
    const handleDelete = (index: number, row: User) => {
        console.log(index, row)
    }   
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
            <!--<template #default="{ row }">
                <el-button size="small" @click="handleEdit(row)">Edit</el-button>
                <el-button size="small"
                           type="danger"
                           @click="handleDelete(row)">Delete</el-button>
            </template>-->
        </el-table-column>
        <el-table-column label="有效日期">
            <!--<template #default="{ row }">
                <el-button size="small" @click="handleEdit(row)">Edit</el-button>
                <el-button size="small"
                           type="danger"
                           @click="handleDelete(row)">Delete</el-button>
            </template>-->
        </el-table-column>
        <el-table-column label="建立日期">
            <!--<template #default="{ row }">
                <el-button size="small" @click="handleEdit(srow)">Edit</el-button>
                <el-button size="small"
                           type="danger"
                           @click="handleDelete(row)">Delete</el-button>
            </template>-->
        </el-table-column>
    </el-table>
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
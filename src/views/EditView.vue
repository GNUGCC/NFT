<script setup lang="ts">
    import { LoadData } from '@/modules/common';
    import { Data, Save, Cancel } from '@/modules/member/edit';            
    import DataField from '@/components/DataField.vue';
</script>

<template>
    <template v-if="Data">
        <DataField fieldTitle="編輯會員資料" :data="Data" @save="Save" @cancel="Cancel" />
    </template>
    <template v-else>
        <el-card class="card" shadow="hover">
            <el-alert title="找不到該會員資料" type="error" effect="dark" :closable="false" center show-icon />
        </el-card>
    </template>
</template>

<style lang="scss" scoped>
    .el-alert {
        //margin: 20px 0 0;
    }

    .el-alert:first-child {
        //margin: 0;
    }

    .card {
        width: 40%;
        margin: auto;
    }

    .notfound {
        width: 300px;
        margin: auto;
        margin-top: 100px;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: firebrick;
        font-size: 20px;
        //background-color: black;
        vertical-align: bottom;
    }
</style>
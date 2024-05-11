<script setup lang="ts">

</script>

<template>
    <el-card class="card" shadow="hover">
        <template #header>
            <el-alert title="新增 MyCard 序號" type="info" :closable="false" effect="light" center show-icon />
        </template>        
        <div style="margin-top: 5px;">
            <el-button type="success" class="button" @click="OrderNFT(Select)" :disabled="Select == null">送出訂單</el-button>
            <el-button type="info" class="button" @click="Cancel" plain>取消</el-button>
        </div>
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
        width: 40%;
        margin: auto;
        max-height: 150px !important;
        font-weight: bolder;
        //background-color: blue !important;
    }
</style>
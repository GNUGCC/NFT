<script setup lang="ts">
     import { Form, FormRef, ValidateRules } from '@/modules/point/console/mycard';
     import { Console } from '@/modules/common';
</script>

<template>
    <div style="margin-top: 150px;">
        <el-card class="card" shadow="hover">
            <template #header>
                <el-alert title="新增 MyCard 序號" type="info" :closable="false" effect="light" center show-icon />
            </template>
            <el-form ref="FormRef"
                     :model="Form"
                     :rules="ValidateRules"
                     status-icon
                     label-width="1">
                <el-form-item prop="account">
                    <label class="form-label">MyCard 序號</label>
                    <el-input v-model="Form.account" placeholder="您的MyCard 序號" />
                </el-form-item>
            </el-form>
            <div style="margin-top: 5px;">
                <el-button type="success" class="button" @click="AddNewMyCard" plain>儲存</el-button>
                <el-button type="info" class="button" @click="Console" plain>取消</el-button>
            </div>
        </el-card>
    </div>    
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
        //align-items: center;
        //max-height: 150px !important;
        font-weight: bolder;
        //background-color: blue !important;
    }
</style>
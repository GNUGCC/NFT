<script setup lang="ts">
    import { PayStatus, Select } from '@/modules/common';
    import { Cancel, Home } from '@/modules/point/mycard';    
    import { QueryMyCardForNft, OrderNFT } from '@/modules/point/nft';
    PayStatus.value = false;
</script>

<template>
    <template v-if="SelectMyCardItem == false">
        <el-card class="card" shadow="hover">
            <template #header>
                <h3 class="error">取得 NFT 品項資訊發生錯誤</h3>
            </template>
        </el-card>
    </template>
    <template v-else-if="PayStatus == true">
        <el-alert class="pay" title="系統導向付款頁面中，請稍候…" type="info" :closable="false" effect="light" center show-icon />
    </template>    
    <template v-else-if="PayStatus == false">
        <el-card class="card" shadow="hover">
            <template #header>
                <h1 class="mycard">NFT 線上購點</h1>
            </template>
            <el-select v-model="Select" placeholder="請選擇卡別(品項)" style="width: 400px;" effect="light" clearable>
                <el-option v-for="item in QueryMyCardForNft"
                           :key="item.id"
                           :label="item.content"
                           :value="item.id">
                    <el-row>
                        <el-col :span="12">
                            <span class="price">台幣 ${{item.points}}</span>
                        </el-col>
                        <el-col :span="12">
                            <span class="point">NFT 會員點數 {{item.content}}</span>
                        </el-col>
                    </el-row>
                </el-option>
            </el-select>
            <div style="margin-top: 5px;">
                <el-button type="success" class="button" @click="OrderNFT(Select)" :disabled="Select == null">送出訂單</el-button>
                <el-button type="info" class="button" @click="Cancel" plain>取消</el-button>
            </div>
        </el-card>
    </template>
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
    }
</style>
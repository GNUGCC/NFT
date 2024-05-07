<script setup lang="ts">    
    import { RouteManager } from '@/utils/';
    import { QueryNFTPoint } from '@/modules/point/nft';
    import { Orders, Home } from '@/modules/member/order';    
</script>

<template>
    <el-card class="card" shadow="hover">
        <template #header>
            <template v-if="QueryNFTPoint">
                <el-alert title="您已購置的 NFT 點數清單" type="success" :closable="false" effect="dark" center show-icon />
            </template>
            <template v-else>
                <el-alert title="您沒有購買任何 NFT 點數" type="error" :closable="false" effect="dark" center show-icon />
            </template>
        </template>
        <el-scrollbar height="500px">
            <el-space wrap>
                <template v-for="item in QueryNFTPoint" :key="item">
                    <el-card style="width: 300px; height: 300px" shadow="hover">
                        <template #header>
                            <el-row style="justify-content: left">
                                <el-col :span="24">已使用點數: {{item.lockedPoints}}</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">未使用點數: {{item.availablePoints}}</el-col>
                            </el-row>
                        </template>
                        <el-image :src="item.uri" :fit="'contain'" />
                    </el-card>                   
                </template>                
            </el-space>                
        </el-scrollbar>        
        <el-button type="primary" class="info" @click="Home" plain>確定</el-button>
    </el-card>    
</template>

<style lang="scss" scoped>
    .querynft {
        width: 100%;
    }

    .info {
        width: 100px;
        margin-top: 15px;
    }

    .card {
        width: 85%;
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
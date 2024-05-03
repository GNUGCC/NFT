<script setup lang="ts">    
    import { RouteManager } from '@/utils/';
    import { QueryNFTPoint } from '@/modules/point/nft';
    import { Orders, Home } from '@/modules/member/order';    
</script>

<template>
    <el-card class="card" shadow="hover">
        <template #header>
            <h3>NFT 點數項目</h3>
        </template>
        <el-table :data="QueryNFTPoint" style="width: 100%;" align="center">
            <el-table-column label="購買內容" width="300px;" align="center">
                <template #default="{ row }">
                    <el-card shadow="hover">
                        <template #header>
                            <el-row>
                                <el-col :span="24">已使用點數：{{row.used}}</el-col>                                
                            </el-row>                            
                            <el-row>
                                <el-col :span="24">未使用點數：{{row.unused}}</el-col>
                            </el-row>
                        </template>
                        <el-image :src="row.src" :fit="'contain'" />
                    </el-card>
                </template>
            </el-table-column>    
        </el-table>
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
        width: 20%;
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
<script setup lang="ts">    
    import { Save, Cancel, Select, SelectMyCardItem } from '@/modules/point/mycard';
</script>

 <!--loading="true" loading-text="請稍候正在取得資訊..." remote-show-suffix="true" remote="false" remote-method="test@yahoo.com"--> 
<template>
    <el-space direction="vertical">
        <el-card class="card" shadow="hover">
            <template #header>
                <h1 class="mycard">MyCard 線上購點</h1>
            </template>
            <el-select v-model="Select" placeholder="請選擇卡別(品項)" style="width: 400px;" effect="light" clearable>
                <el-option v-for="item in SelectMyCardItem"
                           :key="item.id"
                           :label="item.content"
                           :value="item.id">
                    <el-row>
                        <el-col :span="12">
                            <span class="price">台幣 ${{item.points}}</span>
                        </el-col>
                        <el-col :span="12">
                            <span class="point">MyCard 會員點數 {{item.content}}</span>
                        </el-col>
                    </el-row>
                </el-option>
            </el-select>
            <div style="margin-top: 5px;">
                <el-button type="success" class="button" @click="Save" plain>下一步</el-button>
                <!--<el-button type="info" class="button" @click="Cancel(member)" plain>取消</el-button>-->
            </div>
        </el-card>
    </el-space>
</template>
<style lang="scss" scoped>
    .point {
        font-weight: bolder;
        float: right;
        color: blue;
    }

    .price {
        font-weight: bolder;
    }

    .mycard {
        font-weight: bolder;
    }

    .card {
        width: 40%;
        margin: auto;
    }
</style>
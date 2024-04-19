<script setup lang="ts">
      import {  ref, onMounted } from 'vue';
      import { LoadData, FormRef } from '@/modules/common';
      import { Save, Cancel } from '@/modules/point/mycard';
      import { type MyCardType } from '@/models/member';
      
      const form = ref<MyCardType>({});
      const member = ref();
      onMounted(() => LoadData(result => member.value = result));
</script>

<template>
    <el-space direction="vertical">
        <el-card class="card" shadow="hover">
            <template #header>
                <h1 class="mycard">MyCard 購點資訊</h1>
            </template>
            <el-form ref="FormRef"
                     :model="form"
                     status-icon
                     label-width="1">
                <el-form-item prop="point">
                    <label v-bind="{class : 'form-label'}">請輸入您要購買點數</label>
                    <el-input v-model="form.point" placeholder="您的新使用者名稱" />
                </el-form-item>
            </el-form>
            <el-button type="success" class="button" @click="Save(member, form)" plain>儲存</el-button>
            <el-button type="info" class="button" @click="Cancel(member)" plain>取消</el-button>
        </el-card>
    </el-space>
</template>
<style lang="scss" scoped>
    .mycard {
        font-weight: bolder;
    }

    .card {
        width: 300px;
        margin: auto;
    }
</style>
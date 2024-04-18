<script setup lang="ts">
     import { ref } from 'vue';
     import { FormNtf } from '@/modules/common';
     const Form = ref();
</script>

<template>
    <el-space direction="vertical">
        <el-card class="card" shadow="hover">
            <template #header>
                <h1 class="ntf">NTF 購點資訊</h1>
            </template>
            <el-form ref="FormRef"
                     :model="FormNtf"
                     :rules="ValidateRules"
                     status-icon
                     label-width="1">
                <!--<el-form-item prop="point">
                    <label v-bind="{class : 'form-label'}">請輸入您要購買點數</label>
                    <el-input v-model="Form.name" placeholder="您的新使用者名稱" />
                </el-form-item>
                <el-form-item prop="password">
                    <label class="form-label">密碼</label>
                    <el-input v-model="Form.password" type="password" autocomplete="off" placeholder="您的密碼" />
                </el-form-item>
                <el-form-item prop="passwords">
                    <label class="form-label">確認密碼</label>
                    <el-input v-model="Form.passwords" type="password" autocomplete="off" placeholder="請再次輸入您的密碼" />
                </el-form-item>
                <el-form-item prop="mobile">
                    <label v-bind="{class : 'form-label'}">電話號碼</label>
                    <el-input v-model="Form.mobile" placeholder="您的電話號碼" />
                </el-form-item>
                <el-form-item prop="email">
                    <label v-bind="{class : 'form-label'}">電子郵件信箱</label>
                    <el-input v-model="Form.email" placeholder="您的電子郵件信箱" />
                </el-form-item>-->
            </el-form>
            <el-button type="success" class="button" @click="Save(emit)" plain>儲存</el-button>
            <el-button type="info" class="button" @click="Cancel(emit)" plain>取消</el-button>
        </el-card>
    </el-space>
</template>
<style lang="scss" scoped>
    .ntf {
        font-weight: bolder;
    }
</style>
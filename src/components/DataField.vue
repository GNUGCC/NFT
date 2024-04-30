<script setup lang="ts">
    import { defineEmits, defineProps, defineSlots, withDefaults, onMounted } from 'vue';
    import { Save, Cancel, Form, FormRef, ValidateRules, InitlaizeData } from './dataField';
    import type { FieldType, FieldEmitType } from './dataField';
    
    const emit = defineEmits<FieldEmitType>();
    const props = withDefaults(defineProps<FieldType>(), {
        data: {}
    });

    onMounted(() => InitlaizeData(props));
</script>

<template>
    <el-space direction="vertical">
        <el-card class="card" shadow="hover">
            <template #header>
                {{props.fieldTitle}}
            </template>
            <el-form ref="FormRef"
                     :model="Form"
                     :rules="ValidateRules"
                     status-icon
                     label-width="1">
                <el-form-item prop="account">
                    <label class="form-label">新使用者名稱</label>
                    <el-input v-model="Form.account" placeholder="您的新使用者名稱" />
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
                </el-form-item>
            </el-form>
            <el-button type="success" class="button" @click="Save(emit)" plain>儲存</el-button>
            <el-button type="info" class="button" @click="Cancel(emit)" plain>取消</el-button>
        </el-card>
    </el-space>
    <slot name="result" v-bind="Form"></slot>
</template>
<style lang="scss" scoped>
    .button {
        width: 100px;
    }

    .container {
        //margin-top: 10%;
    }

    .nft {
        font-weight: bolder;
    }

    .card {
        width: 450px;
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
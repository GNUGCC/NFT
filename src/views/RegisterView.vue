<script setup lang="ts">
    import { computed, getCurrentInstance } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';    
    import ValidateRules from '@/modules/validate';
    import {
        Register,
        LoginUser,
        Home,
        Form,
        FormField,
        FormRef
    } from '@/modules/register';

    const store = useStore();
    const instance = getCurrentInstance();
    const router = useRouter();
    const ctx = computed(() => ({
        store,
        instance,
        router
    }));
</script>

<template>
    <h3 class="bg-warning text-center text-blue p-2">
        <div class="nft">NFT</div>
        <h6 class="mg-1">
            註冊會員
        </h6>
    </h3>
    <div class="container">
        <el-form ref="FormRef"
                 :model="Form"
                 :rules="ValidateRules"
                 status-icon
                 label-width="1">
            <el-form-item prop="name">
                <label v-bind="{class : 'form-label'}">新使用者名稱</label>
                <el-input v-model="FormField.name" placeholder="您的新使用者名稱" />
            </el-form-item>
            <el-form-item prop="password">
                <label class="form-label">密碼</label>
                <el-input v-model="FormField.password" type="password" autocomplete="off" placeholder="您的密碼" />
            </el-form-item>
            <el-form-item prop="passwords">
                <label class="form-label">確認密碼</label>
                <el-input v-model="FormField.passwords" type="password" autocomplete="off" placeholder="請再次輸入您的密碼" />
            </el-form-item>
            <el-form-item prop="mobile">
                <label v-bind="{class : 'form-label'}">電話號碼</label>
                <el-input v-model="FormField.mobile" placeholder="您的電話號碼" />
            </el-form-item>
            <el-form-item prop="email">
                <label v-bind="{class : 'form-label'}">電子郵件信箱</label>
                <el-input v-model="FormField.email" placeholder="您的電子郵件信箱" />
            </el-form-item>
        </el-form>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-primary" @click="Register(ctx)">註冊</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-dark" @click="Home(ctx)">取消</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    li {
        display: inline-block;
        padding: 10px 24px;
        margin: 0 10px;
        color: #3af;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;

        &.current {
            background-color: rgba(0, 0, 0, .1);
        }
    }

    button {
        width: 25%;
        margin: 5px;
    }

    .container {
        //margin-top: 10%;
    }

    .nft {
        font-weight: bolder;
    }
</style>
<script setup lang="ts">
    import { computed, ref, reactive } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import { FormInstance, FormRules } from 'element-plus';
    import { InternalRegister } from '@/api/account';
    import type { MemberType } from '@/model/member';

    const ValideteName = (rule, value, callBack) => {
        const { name } = LoginUser.value;
        console.log('ValideteName', rule, value, callBack, name);
        if (name == null || name.length < 1) callBack(new Error('請輸入您的使用者名稱'));
        callBack();
    };

    const ValidetePassword = (rule, value, callBack) => {
        const { password } = LoginUser.value;
        console.log('ValideteName', rule, value, callBack, password);
        if (password == null || password.length < 1) callBack(new Error('請輸入您的密碼'));
        callBack();
    };

    const ValidetePasswords = (rule, value, callBack) => {
        const { passwords } = LoginUser.value;
        console.log('ValideteName', rule, value, callBack, passwords);
        if (passwords == null || passwords.length < 1) callBack(new Error('請輸入您的密碼'));
        callBack();
    };

    const store = useStore();
    const formRef = ref<FormInstance>();
    const Form = reactive<MemberType>({});
    const ValidateRules = reactive<FormRules<MemberType>>({
        name: [{ validator: ValideteName, trigger: 'blur' }],
        password: [{ validator: ValidetePassword, trigger: 'blur' }],
        passwords: [{ validator: ValidetePasswords, trigger: 'blur' }],
    });

    const router = useRouter();
    const FormField = reactive<MemberType>({});
    const LoginUser = computed(() => FormField);
    const Home = () => router.push({ path: '/' });
    const Register = () => {
        formRef.value?.validate(valid => {
            if (valid == false) return;
            InternalRegister(FormField.name, FormField.password)
                .then(x => {
                    console.log('使用者註冊: ', LoginUser.value, x);
                    store.dispatch('Member', {
                        name: FormField.name,
                        password: FormField.password,
                        data: x
                    }).then(() => Home());
                })
                .catch(err => {
                    console.log('登入錯誤: ', err);
                });
        });
    };
</script>

<template>
    <h3 class="bg-warning text-center text-blue p-2">
        <div class="nft">NFT</div>
        <h6 class="mg-1">
            目前為新用戶
        </h6>
    </h3>
    <ul class="home">
        <li class="current" @click="Home">首頁</li>
    </ul>
    <div class="container">
        <el-form ref="formRef"
                 :model="Form"
                 :rules="ValidateRules"
                 status-icon
                 label-width="1">
            <el-form-item prop="name">
                <label v-bind="{class : 'form-label'}">新使用者名稱</label>
                <label :class="{'form-label': true}">您的新的使用者名稱</label>
                <el-input v-model="FormField.name" placeholder="您的新使用者名稱" />
            </el-form-item>
            <el-form-item prop="password">
                <label class="form-label">密碼</label>
                <el-input v-model="FormField.password" placeholder="您的密碼" />
            </el-form-item>
            <el-form-item prop="passwords">
                <label class="form-label">確認密碼</label>
                <el-input v-model="FormField.passwords" placeholder="請再次輸入您的密碼" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="el-button-block" @click="Register">註冊</el-button>
            </el-form-item>
        </el-form>
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

    .nft {
        font-weight: bolder;
    }
</style>
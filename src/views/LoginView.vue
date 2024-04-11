<script setup lang="ts">
    import { computed, ref, reactive } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import { FormInstance, FormRules } from 'element-plus';
    import { InternalLogin } from '@/api/account';
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

    const store = useStore();
    const formRef = ref<FormInstance>();
    const Form = reactive<MemberType>({});    
    const ValidateRules = reactive<FormRules<MemberType>>({
        name: [{ validator: ValideteName, trigger: 'blur' }],
        password: [{ validator: ValidetePassword, trigger: 'blur' }]
    });

    const router = useRouter();
    const FormField = reactive<MemberType>({});
    const LoginUser = computed(() => FormField);
    const Home = () => router.push({ path: '/' });
    const Login = () => {
        formRef.value?.validate(valid => {
            if (valid == false) return;
            InternalLogin(FormField.name, FormField.password)
                .then(x => {
                    console.log('使用者登入: ', LoginUser.value, x);
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
    <h3 class="bg-primary text-center text-white p-2">
        <span class="nft">NFT</span>
    </h3>
    <div class="container">
        <el-form ref="formRef"
                 :model="Form"
                 :rules="ValidateRules"
                 status-icon
                 label-width="1">
            <el-form-item prop="name">
                <label v-bind="{class : 'form-label'}">使用者名稱</label>
                <label :class="{'form-label': true}">您的使用者名稱</label>
                <el-input v-model="FormField.name" placeholder="您的使用者名稱" data-username></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <label class="form-label">密碼</label>
                <el-input v-model="FormField.password" placeholder="您的密碼" data-password></el-input>
            </el-form-item>
            <ul class="home">
                <li class="current" @click="Login">登錄</li>
                <li class="current" @click="Home">回主頁</li>
            </ul>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
    .home {
        text-align: center;

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
    }

    .form-label {
        display: block;
        color: #13f;
        font-size: 14px;
    }
</style>

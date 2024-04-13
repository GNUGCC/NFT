<script setup lang="ts">
    import { computed, ref, reactive } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import { FormInstance, FormRules } from 'element-plus';
    import { InternalLogin } from '@/api/account';
    import type { MemberType } from '@/model/member';

    const Member = computed(() => store.getters.Member);
    const CheckLogin = computed(() => Member.value == null);
    const LoginOut = () => store.dispatch('Member', null);

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

    const FormField = reactive<MemberType>({});
    const LoginUser = computed(() => FormField);
    const Login = () => {
        formRef.value?.validate(valid => {            
            if (valid == false) return;

            const { name, password } = FormField;
            InternalLogin(name, password)
                .then(x => {
                    console.log('使用者登入: ', LoginUser.value, x);
                    store.dispatch('Member', {
                        name,
                        password,
                        data: x
                    });
                })
                .catch(err => {
                    console.log('登入錯誤: ', err);
                });
        });
    };
</script>

<template>
    <h3 class="bg-primary text-center text-white p-2">
        <div class="nft">NFT</div>
        <span v-if="CheckLogin == true">登入頁面</span>
        <h1 v-if="CheckLogin == false">登入者：{{Member.name}}</h1>
    </h3>
    <div class="container">
        <template v-if="CheckLogin == true">
            <el-form ref="formRef"
                     :model="Form"
                     :rules="ValidateRules"
                     status-icon
                     label-width="1">
                <el-form-item prop="name">
                    <label v-bind="{class : 'form-label'}">使用者名稱</label>
                    <el-input v-model="FormField.name" placeholder="您的使用者名稱" clearable data-username></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <label class="form-label">密碼</label>
                    <el-input v-model="FormField.password" type="password" autocomplete="off" placeholder="您的密碼" clearable data-password></el-input>
                </el-form-item>
            </el-form>
        </template>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-primary" @click="Login" v-if="CheckLogin == true">登錄</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-secondary" @click="LoginOut" v-if="CheckLogin == false">登出</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-success" @click="Register" v-if="CheckLogin == true">註冊</button>
            </div>
        </div>
    </div>
</template>    

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .nft {
        font-weight: bolder;
    }

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

    button {
        width: 25%;
        margin: 5px;
    }

    .container {
        margin-top: 10%;
    }

    .form-label {
        display: block;
        color: #13f;
        font-size: 14px;
    }
</style>
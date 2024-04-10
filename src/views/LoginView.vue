<script setup lang="ts">
    import { computed, ref, reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { FormInstance, FormRules } from 'element-plus'
    import axios from 'axios';

    type FormType = {
        name?: string,
        password?: string
    };

    const Form = reactive<FormType>({});
    const FormRef = ref<FormInstance>();
    const ValidateRules = reactive<FormRules<FormType>>({
        name: [{ required: true, message: '請輸入您的使用者名稱', trigger: 'blur' }],
        password: [{ required: true, message: '請輸入您的密碼', trigger: 'blur' }]
    });

    const router = useRouter();
    const Name = ref('');
    const Password = ref('');
    const LoginUser = computed(()=> `${Name.value}:${Password.value}`);    
    const Home = () => router.push({ path: '/' });
    const Login = () => {
        axios.post('api/login', {
            name: Name.value,
            password: Password.value
        })
            .then(x => {
                console.log('Login: ', LoginUser.value, x);
                Home();
            })
            .catch(err => {
                console.log('api not found ', err);
            });
    };
</script>

<template>
    <div class="container">
        <el-form ref="FormRef"
                 :model="Form"
                 :rules="ValidateRules"
                 status-icon
                 label-width="1">
            <el-form-item prop="name">
                <label v-bind="{class : 'form-label'}">使用者名稱</label>
                <label :class="{'form-label': true}">您的使用者名稱</label>
                <el-input v-model="Name" placeholder="您的使用者名稱" data-username></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <label class="form-label">密碼</label>
                <el-input v-model="Password" placeholder="您的密碼" data-password></el-input>
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

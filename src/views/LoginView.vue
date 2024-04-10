<script setup lang="ts">
    import { computed, ref, reactive } from 'vue';
    import { FormRules } from 'element-plus'

    type FormType = {
        name?: string,
        password?: string,
        grade?: number
    };
    
    const Name = ref('');
    const Password = ref('');
    const LoginUser = computed(()=> `${Name.value}:${Password.value}`);
    const Login = () => console.log(LoginUser.value);

    const Form = reactive<FormType>({});
    const ValidateRules = reactive<FormRules<FormType>>({
        name: [{ required: true, message: '請輸入您的使用者名稱', trigger: 'blur' }],
        password: [{ required: true, message: '請輸入您的密碼', trigger: 'blur' }]
    });
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
            <el-form-item>
                <el-button type="primary" class="el-button-block" @click="Login">登錄</el-button>
            </el-form-item>
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

<script setup lang="ts">
    //import {
    //    Home,
    //    Current,
    //    CheckLogin,
    //    Name,
    //    Password,
    //    Grade,
    //    Login,
    //    LoginOut,
    //    InternalRegister as Register,
    //    Form,
    //    FormRef,
    //    ValidateRules,
    //} from '@/modules';
</script>

<template>    
    <!--<ul class="home">
        <li :class="Current('Login')" @click="Login" v-if="CheckLogin == false">登入</li>
        <li :class="Current('Home')" @click="Home">首頁</li>
        <li @click="LoginOut" v-if="CheckLogin">登出</li>
        <li @click="Register">註冊</li>
    </ul>-->
    <div class="container">
        <el-form ref="FormRef"
                 :model="Form"
                 :rules="ValidateRules"
                 status-icon
                 label-width="1">
            <el-form-item prop="name">
                <label v-bind="{class : 'form-label'}">使用者名稱</label>
                <label :class="{'form-label': true}">您的使用者名稱</label>
                <el-input v-model="Name" placeholder="您的使用者名稱" />
            </el-form-item>
            <el-form-item prop="password">
                <label class="form-label">密碼</label>
                <el-input v-model="Password" placeholder="您的密碼" />
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

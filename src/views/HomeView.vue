<script setup lang="ts">
    import {
        Login,
        LoginOut,
        Member,
        Authentication,
        Register,
        Form,
        FormRef,
        ValidateRules
    } from '@/modules/home';    
</script>

<template>
    <h3 class="bg-primary text-center text-white p-2">
        <div class="nft">NFT</div>
        <span v-if="Authentication == false">登入頁面</span>
        <h1 v-if="Authentication == true">登入者：{{Member.name}}</h1>
    </h3>
    <div class="container">
        <template v-if="Authentication == false">
            <el-form ref="FormRef"
                     :model="Form"
                     :rules="ValidateRules"
                     status-icon
                     label-width="1">
                <el-form-item prop="name">
                    <label v-bind="{class : 'form-label'}">使用者名稱</label>
                    <el-input v-model="Form.name" placeholder="您的使用者名稱" clearable data-username></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <label class="form-label">密碼</label>
                    <el-input v-model="Form.password" type="password" autocomplete="off" placeholder="您的密碼" clearable data-password></el-input>
                </el-form-item>
            </el-form>
        </template>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-primary" @click="Login" v-if="Authentication == false">登錄</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-secondary" @click="LoginOut" v-if="Authentication == true">登出</button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-success" @click="Register" v-if="Authentication == false">註冊</button>
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
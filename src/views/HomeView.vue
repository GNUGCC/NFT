<script setup lang="ts">
    import Header from '@/components/Header.vue';
    import Info from '@/components/Info.vue';
    import Footer from '@/components/Footer.vue';
      import {
        Login,
        Logout,
        Authentication,
        Register,
        Form,
        FormRef,
        ValidateRules
    } from '@/modules/home';
</script>

<template>
    <template v-if="Authentication == false">
        <h3 class="bg-primary text-center text-white p-2">
            <div class="nft">NFT</div>
        </h3>
        <div class="container">
            <el-space warp>
                <el-card class="box-card">
                    <template #header>
                        <span class="nft-title">NFT 登入頁面</span>
                    </template>
                    <el-form ref="FormRef"
                             :model="Form"
                             :rules="ValidateRules"
                             status-icon
                             label-width="1">
                        <el-form-item prop="account">
                            <label v-bind="{class : 'form-label'}">使用者名稱</label>
                            <el-input v-model="Form.account" placeholder="您的使用者名稱" clearable data-username></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <label class="form-label">密碼</label>
                            <el-input v-model="Form.password" type="password" autocomplete="off" placeholder="您的密碼" clearable data-password></el-input>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-space>
        </div>
        <div class="row">
            <div class="col">
                <el-button type="primary" class="button" @click="Login(Form.account, Form.password)" v-if="Authentication == false">登錄</el-button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-button type="info" class="button" @click="Logout" v-if="Authentication == true">登出</el-button>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <el-button type="success" class="button" @click="Register" v-if="Authentication == false">註冊</el-button>
            </div>
        </div>
    </template>
    <template v-else>
        <el-container class="home">
            <el-header><Header /></el-header>
            <el-main><Info /></el-main>
            <el-footer><Footer /></el-footer>
        </el-container>
    </template>
</template>

<style lang="scss" scoped>
    .el-alert__title {
        font-size: 20px;
        font-weight: bolder;
    }

    .el-alert--info.is-dark {
        background-color: red;
    }

    .test {
        max-width: 100%;
    }

    .nft-title {
        font-weight: bolder;
    }

    .box-card {
        width: 450px;
    }

    .button {
        width: 100px;
    }

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
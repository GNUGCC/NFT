<script setup lang="ts">
    import { Home, Logout, Register, Authentication } from '@/modules/home';
    import { Console } from '@/modules/common';
    import { Edit, Avatar, View, Aim } from '@element-plus/icons-vue'
</script>

<template>    
    <el-container class="home index">
        <el-header>
            <el-row class="title">
                <el-col :span="8">
                    <template v-if="Authentication == false">
                        <el-button type="primary" @click="Home" :icon="Avatar" round plain>登錄</el-button>
                    </template>
                    <template v-else>
                        <el-button type="primary" @click="Logout" :icon="Avatar" round plain>登出</el-button>
                    </template>
                </el-col>
                <el-col :span="8">
                    <h1 class="text-center text-white p-0">
                        NFT
                    </h1>
                </el-col>
                <el-col :span="8">
                    <template v-if="Authentication == false">
                        <el-button type="success" @click="Register" :icon="Edit" round plain>新會員註冊</el-button>
                    </template>
                    <template v-else>
                        <el-button type="info" @click="Home" :icon="View" round plain>會員專區</el-button>
                        <el-button type="info" @click="Console" :icon="Aim" round>後台管理</el-button>
                    </template>
                </el-col>                
            </el-row>           
        </el-header>
        <el-main>
            <template v-if="Authentication == false">
                <h1 class="text-white text-center">歡迎來到艾沛國際 NFT 購點平台</h1>
                <div class="text-center message">
                    <p>請選擇左上角登錄</p>
                    <p>若您是新成員，請選擇右上角註冊成為我們的會員吧</p>
                </div>
            </template>
            <template v-else>
                <h1 class="text-white text-center">{{Authentication.name}} 您好，歡迎來到艾沛國際 NFT 購點平台</h1>
                <div class="text-center message">
                    <p>請點選右上角會員專區進入專屬您個人頁面</p>
                </div>
            </template>
        </el-main>
    </el-container>
</template>
<style lan="scss" scoped>
    .message {
        font-size: 20px;
        color:#13d871;
    }

    .title {
        background-color: #5a0fd5;
        /*background-image: radial-gradient(rgba(0, 0, 15, 0.5), rgba(15, 15, 200, 0.5)), url('https://nft.tradcoins.net/nft.webp');*/
        background-image: radial-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('https://nft.tradcoins.net/nft.webp');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    .nft {
        font-weight: bolder;
    }

    .index {
        background-color: gainsboro;
        /*background-image: radial-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('https://nft.tradcoins.net/nft.webp');*/
        background-image: radial-gradient(rgba(0, 0, 15, 0.5), rgba(15, 15, 200, 0.5)), url('https://nft.tradcoins.net/nft.webp');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        height: 100vh;
    }
</style>
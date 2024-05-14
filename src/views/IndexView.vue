<script setup lang="ts">
    import { Home, Authentication } from '@/modules/home';
</script>

<template>    
    <el-container class="home index">
        <el-header>
            <h3 class="text-center text-white p-0">
                <span class="nft">
                    艾沛國際                    
                </span>
                <template v-if="Authentication == false">
                    <el-link class="nft text-center text-white p-0" style="margin-right: 0px" @click="Home" underline>登錄</el-link>
                </template>                
                <template v-else>
                    <el-link class="nft text-center text-white p-0" style="margin-right: 0px" @click="Home" underline>會員中心</el-link>
                </template>
            </h3>            
            <el-divider />
        </el-header>
        <el-main>
        </el-main>
    </el-container>
</template>
<style lan="scss" scoped>
    .nft {
        font-weight: bolder;
    }

    .index {
        background-color: gainsboro;
        background-image: radial-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('https://nft.tradcoins.net/nft.webp');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        height: 100vh;
    }
</style>
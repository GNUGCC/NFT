<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const CheckLogin = false;
    /* eslint-disable */
    const Login = () => router.push({ path: '/login' });
    /* eslint-disable */
    const Register = () => { };
</script>

<template>
    <div class="wrapper">
        <h3 class="bg-primary text-center text-white p-2">
            <div class="nft">NFT</div> 測試頁面
        </h3>
        <ul class="home">
            <li class="current" @click="Login" v-if="CheckLogin == false">登入</li>
            <li class="current" @click="Register">註冊</li>
            <!--<li @click="LoginOut" v-if="CheckLogin">登出</li>
            <li @click="Register">註冊</li>-->
        </ul>
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

    .form-label {
        display: block;
        color: #13f;
        font-size: 14px;
    }
</style>
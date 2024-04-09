<script setup lang="ts">
    //import { GetQuestion, CountGrade } from '@/modules';
    const CheckLogin = false;
</script>

<template>
    <h3 class="bg-primary text-center text-white p-2">
        歡迎進入本系統
    </h3>
    <ul class="home">
        <li class="current" @click="Login" v-if="CheckLogin == false">登入</li>
        <li class="current" @click="Home">註冊</li>
        <!--<li @click="LoginOut" v-if="CheckLogin">登出</li>
        <li @click="Register">註冊</li>-->
    </ul>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
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

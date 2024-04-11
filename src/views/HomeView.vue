<script setup lang="ts">
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';

    const store = useStore();
    const router = useRouter();
    const Login = () => router.push({ path: '/login' });
    const Member = computed(() => store.getters.Member);
    const CheckLogin = computed(() => Member.value == null);
    const LoginOut = () => store.dispatch('Member', null);
    const Register = () => { router.push({path: '/register'}) };
</script>

<template>
    <h3 class="bg-primary text-center text-white p-2">
        <div class="nft">NFT</div>
        <span v-if="CheckLogin == true">登入頁面</span>
        <h1 v-if="CheckLogin == false">登入者：{{Member.name}}</h1>
    </h3>
    <div class="container">
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-outline-primary" @click="Login" v-if="CheckLogin == true">登入</button>
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
        margin-top: 20%;
    }

    .form-label {
        display: block;
        color: #13f;
        font-size: 14px;
    }
</style>
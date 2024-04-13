<script setup lang="ts">
    import { computed, getCurrentInstance } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';    
    import DataField from '@/components/DataField.vue';
    import { Register, Home, Save, Cancel } from '@/modules/register';
    
    const store = useStore();
    const instance = getCurrentInstance();
    const router = useRouter();
    const ctx = computed(() => ({
        store,
        instance,
        router
    }));
</script>

<template>
    <DataField fieldTitle="新會員註冊" :data="{name: '123'}" @save="Save" @cancel="Cancel"></DataField>
</template>
<style lang="scss" scoped>
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

    button {
        width: 25%;
        margin: 5px;
    }

    .container {
        //margin-top: 10%;
    }

    .nft {
        font-weight: bolder;
    }
</style>
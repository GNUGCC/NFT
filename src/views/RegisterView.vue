<script setup lang="ts">
    import { Save, Cancel } from '@/modules/member/register';
    import DataField from '@/components/DataField.vue';
</script>

<template>
    <h3 class="bg-primary text-center text-white p-2">
        <div class="nft">NFT</div>
    </h3>
    <DataField fieldTitle="新會員註冊" @save="Save" @cancel="Cancel" />
</template>

<style lang="scss" scoped>
    .nft {
        font-weight: bolder;
    }
</style>
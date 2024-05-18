<script setup lang="ts">
    import { DateTimeNow } from '@/modules/common';
</script>

<template>
    <div class="fixed-bottom text-center p-0 nft">
        <h4 class="nft">{{DateTimeNow}}</h4>
    </div>
</template>

<style lang="scss" scoped>
    .title {
        color: limegreen;
    }

    .nft {
        color: black;
        background-color: #5a0fd5;
        background-image: radial-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
</style>
<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { LoadData } from '@/modules/common';
    import { Save, Cancel } from '@/modules/member/edit';            
    import DataField from '@/components/DataField.vue';

    const data = ref();
    onMounted(() => LoadData(result => {
        result.password = result.passwords = null;
        data.value = result;
    }));
</script>

<template>
    <template v-if="data">
        <DataField fieldTitle="編輯會員資料" :data="data" @save="Save" @cancel="Cancel" />
    </template>
    <template v-else>
        <span class="NotFound">找不找該會員資料</span>
    </template>
</template>

<style lang="scss" scoped>
    .NotFound {
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: red;
        font-size: 20px;
        background-color: black;
        vertical-align: bottom;
    }
</style>
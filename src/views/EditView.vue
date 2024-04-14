<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { Save, Cancel } from '@/modules/edit';        
    import { LoadData, GetRoutParams } from '@/modules/common';
    import DataField from '@/components/DataField.vue';

    const data = ref();
    onMounted(() => LoadData(GetRoutParams(useRouter()), useStore(), result => data.value = result));
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
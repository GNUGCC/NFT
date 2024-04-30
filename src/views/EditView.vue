<script setup lang="ts">
    import { LoadData } from '@/modules/common';
    import { Data, Save, Cancel } from '@/modules/member/edit';
    import DataField from '@/components/DataField.vue';
</script>

<template>
    <DataField fieldTitle="編輯會員資料" :data="Data" @save="Save" @cancel="Cancel" />
</template>
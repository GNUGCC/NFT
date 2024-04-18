<script setup lang="ts">   
    import { Save, Cancel } from '@/modules/member/register';
    import DataField from '@/components/DataField.vue';  
</script>

<template>
    <DataField fieldTitle="新會員註冊" @save="Save" @cancel="Cancel" />
</template>
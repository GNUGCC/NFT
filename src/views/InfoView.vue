<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { LoadData } from '@/modules/common';
    import { type MemberType } from '@/models/member';
    //import { defineProps, computed } from 'vue';

    //const props = defineProps<MemberType>();
    //const member = computed(() => props);
    //const data = ref<MemberType>();
    //onMounted(() => LoadData(result => data.value = result));
    const data = ref<MemberType>({ id: '100', name: '測試資料', email: 'test@yahoo.com', mobile: '12345' });
    console.log('data: ', data);
</script>

<template>
    <template v-if="data">
        <div class="container">
            <el-card class="card" shadow="hover">
                <template #header>
                    {{data.name}}
                </template>
                <div class="info">
                    總共點數:
                    <span class="point">
                        100
                    </span>
                </div>
                <div class="info">
                    剩餘點數:
                    <span class="point">
                        100
                    </span>
                </div>
                <div class="info">
                    優惠點數:
                    <span class="point">
                        100
                    </span>
                </div>
            </el-card>
        </div>
    </template>
</template>

<style lang="scss" scoped>
    .card {
        width: 300px;
        margin: auto;
    }

    .point {
        font-weight: bold;
        font-size: 15px;
    }

    .info {
        font-weight: bolder;
        text-align: center;
    }
</style>
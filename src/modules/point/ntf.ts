import { computed } from 'vue';
import { Log, Home, Authentication } from '@/modules/common';

const AddNTF = computed(() => '/point/ntf/add');

/**
 * 
 * @param member
 * @param point
 */
function Save(value) {
    const { point } = value;
    Log('Save 加購 NFT: ', point);
    Home();
}

/**
 * 
 * @param member
 */
function Cancel() {
    Log('Cancel 加購 NFT');
    Home();
}

export {
    AddNTF,
    Save,
    Cancel
}
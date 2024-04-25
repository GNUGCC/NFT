import { ref } from 'vue';
import { computedAsync } from '@vueuse/core';
import { Log, Home } from '@/modules/common';
import { InternalMyCardSelectItem } from '@/api/point';

const Select = ref();
const SelectMyCardItem = computedAsync(async () => await InternalMyCardSelectItem());

function AddMyCard(member) {
    Log('加購 MyCard');
    return `/point/mycard/add/${member.id}`;
}

/**
 * 
 * @param member
 * @param point
 */
function Save(member, value) {
    const { point } = value;
    Log('Save 加購 MyCard: ', member, point);
    Home();
}

/**
 * 
 * @param member
 */
function Cancel(member) {
    Log('Cancel 加購 MyCard: ', member);
    Home();
}

export {    
    Save,
    Cancel,
    AddMyCard,
    Select,
    SelectMyCardItem
}
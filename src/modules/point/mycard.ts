import { Log, Home } from '@/modules/common';

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
    AddMyCard,
    Save,
    Cancel
}
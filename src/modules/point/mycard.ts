import { Log } from '@/modules/common';

function AddMyCard(member) {
    Log('加購 MyCard');
    return `/point/mycard/add/${member.id}`;
}

export {
    AddMyCard
}
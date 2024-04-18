import { Log } from '@/modules/common';

function AddMyCard(member) {
    Log('加購 MyCard');
    return `/mycard/add/:${member.id}`;
}

export {
    AddMyCard
}
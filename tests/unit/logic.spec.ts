import performanceMember from './performanceMember';
import performanceMyCard from './performanceMyCard';
import addMember from './addMember';
import queryMember from './queryMember';
import updateMember from './updateMember';
import deleteMember from './deleteMember';
import addMyCard from './addMyCard';

describe('測試相關的 Performance', () => {
    performanceMember();
    performanceMyCard();
});

describe('測試會員資料相關功能', () => {
    addMember();
    queryMember();
    updateMember();
    deleteMember();    
});

describe('測試 MyCard 點數相關功能', () => {
    addMyCard();
});

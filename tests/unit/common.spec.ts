import addMember from './addMember';
import queryMember from './queryMember';
import updateMember from './updateMember';
import deleteMember from './deleteMember';

describe('測試會員資料相關功能', () => {
    addMember();
    queryMember();
    updateMember();
    deleteMember();    
});

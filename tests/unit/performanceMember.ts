import { PerformanceMember } from '@/store/mutations';

describe('PerformanceMember', () => {
    it("測試空值...", () => {
        expect(PerformanceMember(null))
            .toBeNull();
    });

    it("測試空物件...", () => {
        expect(PerformanceMember({}))
            .toEqual({ "account": undefined, "build_time": undefined, "email": undefined, "id": undefined, "mobile": undefined, "name": undefined, "parent": undefined, "password": undefined, "token": undefined });
    });

    it("測試 id: '1'...", () => {
        expect(PerformanceMember({ id: '1' }))
            .toEqual({ "account": undefined, "build_time": undefined, "email": undefined, "id": '1', "mobile": undefined, "name": undefined, "parent": undefined, "password": undefined, "token": undefined });
    });
});
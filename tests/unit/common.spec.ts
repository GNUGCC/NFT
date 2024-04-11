import { QueryMember } from '@/store/getters';
import { PerformanceMember, AddMember, UpdateMember, DeleteMember } from '@/store/mutations';

describe('測試會員資料相關功能', () => {
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

    describe('QueryMember', () => {
        it("測試 QueryMember(id: '', [])...", () => {
            expect(QueryMember('', []))
                .toBe(false);
        });

        it("測試 QueryMember(id: '1', PerformanceMember({}))", () => {
            expect(QueryMember('1', [PerformanceMember({})!]))
                .toBe(false);
        });

        it("測試 QueryMember(id: 1, PerformanceMember({ id: '1' })", () => {
            const member = PerformanceMember({ id: '1' })!;
            expect(QueryMember('1', [member]))
                .toEqual({
                    index: 0,
                    result: member
                });
        });

        it("測試 QueryMember(id: 1, PerformanceMember({ id: '2' })", () => {
            const member = PerformanceMember({ id: '2' })!;
            expect(QueryMember('2', [member]))
                .toEqual({
                    index: 0,
                    result: member
                });
        });

        const members = [PerformanceMember({ id: '1' })!, PerformanceMember({ id: '2' })!];
        it("測試來源 2 筆... QueryMember(id: 1, PerformanceMember({ id: '1' })", () => {
            expect(QueryMember('1', members))
                .toEqual({
                    index: 0,
                    result: members[0]
                });
        });

        it("測試來源 2 筆... QueryMember(id: 1, PerformanceMember({ id: '2' })", () => {
            expect(QueryMember('2', members))
                .toEqual({
                    index: 1,
                    result: members[1]
                });
        });
    })

    describe('AddMember', () => {
        const buffers = [];
        const a = AddMember(PerformanceMember({})!, buffers);
        const asize = buffers.length;

        it("測試 AddMember(PerformanceMember({}), [])", () => {
            expect(a)
                .toBe(true);
        });

        it("測試加入後資料數量...", () => {
            expect(asize)
                .toBe(1);
        });

        const b = AddMember(PerformanceMember({ name: 'test' })!, buffers);
        const bsize = buffers.length;
        it("測試 AddMember(PerformanceMember({name: 'test'}), [])", () => {
            expect(b)
                .toBe(true);
        });

        it("測試加入後資料數量...", () => {
            expect(bsize)
                .toBe(2);
        });
    });

    describe('UpdateMember', () => {
        const members = [PerformanceMember({ id: '1' })!, PerformanceMember({ id: '2' })!];
        const update = members[0];

        it('測試更新前...', () => {            
            expect(update.mobile)
                .toBeUndefined();            
        });

        it('測試更新後...', () => {
            update.mobile = '12345';
            const updated = UpdateMember(update, members);
            expect(updated[0].mobile)
                .toBe('12345');
        });
    })

    describe('DeleteMember', () => {
        const members = [PerformanceMember({ id: '1' })!, PerformanceMember({ id: '2' })!];
        it('測試刪除 id:1 前...', () => {
            expect(members)
                .toHaveLength(2);
        });


        it('測試刪除 id:1 後...', () => {
            expect(DeleteMember('1', members))
                .toHaveLength(1);
        });

    });
});

import { PerformanceMember, QueryMember } from '@/store/common';

export default function () {
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
    });
}
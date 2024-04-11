import { PerformanceMember, DeleteMember } from '@/store/mutations';

export default function () {
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

        it('測試刪除 id:2 前...', () => {
            expect(members)
                .toHaveLength(1);
        });

        it('測試刪除 id:2 後...', () => {
            expect(DeleteMember('2', members))
                .toHaveLength(1);
        });

    });
}
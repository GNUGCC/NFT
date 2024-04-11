import { PerformanceMember, UpdateMember } from '@/store/mutations';

export default function () {
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
    });
}
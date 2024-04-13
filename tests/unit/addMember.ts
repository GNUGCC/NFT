import { PerformanceMember, AddMember } from '@/store/common';

export default function () {
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
}
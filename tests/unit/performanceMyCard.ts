import { PerformanceMyCard } from '@/store/common';

export default function () {
    describe('PerformanceMyCard', () => {
        it("測試空值...", () => {
            expect(PerformanceMyCard(null))
                .toBeNull();
        });

        it("測試空物件...", () => {
            expect(PerformanceMyCard({}))
                .toEqual({ build_time: undefined, id: undefined, m_id: undefined, mycard_data: undefined, mycard_point: undefined, status: undefined });
        });

        it("測試 mycard_data: 'demo card'...", () => {
            expect(PerformanceMyCard({ id: '1', mycard_data: 'demo card', mycard_point: '1000', status: 'a' }))
                .toEqual({ id: '1', mycard_data: 'demo card', mycard_point: '1000', status: 'a' });
        });

        it("測試 mycard_point: '1000'...", () => {
            expect(PerformanceMyCard({ id: '1', mycard_data: '100', mycard_point: '1000', status: 'a' }))
                .toEqual({ id: '1', mycard_data: '100', mycard_point: '1000', status: 'a' });
        });
    });
}
import actions from '@/store/actions';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import { PerformanceMember } from '@/store/common';

describe("測試 Store", () => {
    describe('Actions...', () => {
        const commit = jest.fn();
        const id_a = PerformanceMember({ id: 'a' });

        it('Member PerformanceMember({id: a})', () => {
            actions.Member({ commit }, id_a);
            expect(commit.mock.calls[0][0]).toBe('Member');
            expect(commit.mock.calls[0][1]).toEqual(id_a);
        });

        it('Members', () => {
            actions.Members({ commit }, [id_a]);
            expect(commit.mock.calls[1][0]).toBe('Members');
            expect(commit.mock.calls[1][1]).toEqual([id_a]);
        });
    });

    describe('Getters...', () => {
        it('Member PerformanceMember({}):', () => {
            const state = { Member: PerformanceMember({}) };
            expect(getters.Member(state))
                .toEqual(state.Member);
        });    

        it('Member PerformanceMember({id: 1})', () => {
            const state = { Member: PerformanceMember({id: '1'}) };
            expect(getters.Member(state))
                .toEqual(state.Member);
        });  

        it('Members', () => {
            const state = {
                Members: [PerformanceMember({ id: '1' })!, PerformanceMember({ id: '2' })!]
            };

            getters.Members(state)
            expect(state.Members)
                .toEqual(state.Members);
        });
    });

    describe('Mutations...', () => {        
        const state = {
            Member: null,
            Members: []
        };

        it('PerformanceMember({id: 1})', () => {            
            const member = PerformanceMember({ id: '1' });

            mutations.Member(state, member);
            expect(state.Member)
                .toEqual(member);

            expect(state.Members)
                .toHaveLength(1);
        });

        it('PerformanceMember({id: 2})', () => {
            const member = PerformanceMember({ id: '2' });

            mutations.Member(state, member);
            expect(state.Member)
                .toEqual(member);

            expect(state.Members)
                .toHaveLength(2);
        }); 

        it('新增重覆會員 PerformanceMember({id: 1})', () => {
            const member = PerformanceMember({ id: '1' });

            mutations.Member(state, member);
            expect(state.Member)
                .toEqual(PerformanceMember({ id: '2' }));

            expect(state.Members)
                .toHaveLength(2);
        }); 

        it('PerformanceMember({id: 3})', () => {
            const member = PerformanceMember({ id: '3' });

            mutations.Member(state, member);
            expect(state.Member)
                .toEqual(member);

            expect(state.Members)
                .toHaveLength(3);
        }); 
    });
});

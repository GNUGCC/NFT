import actions from '@/store/actions';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import { PerformanceMember } from '@/store/mutations';

describe("測試 Store", () => {
    describe('Actions...', () => {
        const commit = jest.fn();

        it('Member', () => {
            expect(actions.Member({ commit }, null))
                .toBe(undefined);
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
        it('Member PerformanceMember({id: 2})', () => {
            const member = PerformanceMember({ id: '2' });
            const state = { Member: null };

            mutations.Member(state, member);
            expect(state.Member)
                .toEqual(member);
        });       
    });
});

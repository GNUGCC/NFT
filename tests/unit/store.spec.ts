import actions from '@/store/actions';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import { PerformanceMember } from '@/store/common';
import { type MemberType } from '../../src/models/member';

describe("測試 Store", () => {
    describe('Actions...', () => {
        const commit = jest.fn();        
        const id_a = PerformanceMember({ id: 'a' })!;

        describe('測試會員資料...', () => {
            it('Member PerformanceMember({id: a})', () => {
                actions.Member({ commit }, id_a);
                expect(commit.mock.calls[0][0])
                    .toBe('Member');

                expect(commit.mock.calls[0][1])
                    .toEqual(id_a);
            });

            it('Members', () => {
                actions.Members({ commit }, [id_a]);
                expect(commit.mock.calls[1][0])
                    .toBe('Members');

                expect(commit.mock.calls[1][1])
                    .toEqual([id_a]);
            });

            describe('Update Member...', () => {
                const dispatch = jest.fn();
                const getters = {
                    Members: [PerformanceMember({ id: 'b', name: 'nameb' })!]
                };

                it('更新前 Member', () => {
                    expect(getters.Members[0].name)
                        .toMatch('nameb');
                });

                it('更新不存在的 Member(id: 3)', async () => {
                    const id_3 = PerformanceMember({ id: '3', name: 'update test3' });
                    const result = await actions.Update({ dispatch, getters }, id_3);

                    expect(dispatch.mock.calls[0][0])
                        .toBe('Member');

                    expect(dispatch.mock.calls[0][1])
                        .toEqual(id_3);

                    expect(getters.Members[0].name)
                        .toMatch('nameb');

                    expect(result)
                        .toBe(false);
                });

                it('更新已存在的 Member(id: b) 後', async () => {
                    const id_b = PerformanceMember({ id: 'b', name: 'update test3' });
                    const result = await actions.Update({ dispatch, getters }, id_b);

                    expect(dispatch.mock.calls[1][0])
                        .toBe('Member');

                    expect(dispatch.mock.calls[1][1])
                        .toEqual(id_b);

                    expect(getters.Members[0].name)
                        .toMatch('update test3');

                    expect(result)
                        .toEqual(getters.Members);

                    expect(getters.Members)
                        .toHaveLength(getters.Members.length);
                });
            });        
        })        
    });

    describe('Getters...', () => {
        it('空的 Member', () => {
            const state = {
                Member: null
            };

            expect(getters.Member(state))
                .toBeNull();
        });

        it('Member PerformanceMember({}):', () => {
            const state = { Member: PerformanceMember({}) };
            
            expect(state.Member)
                .toEqual({});

            expect(getters.Member(state))
                .toBeNull();
        });

        it('Member PerformanceMember({id: 1})', () => {
            const state = { Member: PerformanceMember({ id: '1' }) };
            expect(getters.Member(state))
                .toEqual(state.Member);
        });

        describe('ReadMember...', () => {
            const id_a = PerformanceMember({ id: 'a' });
            const state = {
                Members: [PerformanceMember({ id: 'a' })]
            };

            it('不存在的 {id: 1}', () => {
                expect(getters.ReadMember(state)({ id: '1' }))
                    .toBeNull();
            });

            it('{id: a}', () => {
                expect(getters.ReadMember(state)('a'))
                    .toEqual({
                        index: 0,
                        result: id_a
                    });
            });
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
            Members: Array<MemberType>()
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

            state.Member = null;
            mutations.Member(state, member);
            expect(state.Member)
                .toEqual(PerformanceMember({ id: '1' }));

            expect(state.Members)
                .toHaveLength(2);
        });

        it('PerformanceMember({id: 3})', () => {
            const member = PerformanceMember({ id: '3', name: 'test3' });

            mutations.Member(state, member);
            expect(state.Member)
                .toEqual(member);

            expect(state.Members)
                .toHaveLength(3);
        });

        it('空的 Member', () => {
            mutations.Member(state, null);
            expect(state.Member)
                .toBeNull();
        });
    });
});

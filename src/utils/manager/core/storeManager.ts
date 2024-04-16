import { Store } from "vuex";
import useStore from '@/store';
import { MemberStore } from '@/models/member';

export class StoreManager {
    /**
     * 
     */
    private static _store: Store<MemberStore> = useStore();

    /**
     * 
     */
    private static get Store() {
        return StoreManager._store;
    }

    /**
     * 
     */
    static get Authentication() {
        return StoreManager.Member != null;
    }

    /**
     * 
     */
    static set Authentication(value) {
        StoreManager.Dispatch('Member', value);
    }

    /**
     * 
     */
    static get Member() {
        return StoreManager.Getters.Member;
    }

    /**
     * 
     */
    static set Member(value) {
        StoreManager.Dispatch('Member', value);
    }


    /**
     * 
     */
    static get Members() {
        return StoreManager.Getters.Members;
    }

    /**
     * 
     * @param valud
     */
    static AddMember(value) {
        return StoreManager.Dispatch('Member', value);
    }

    /**
     * 
     * @param id
     */
    static ReadMember(id) {
        return StoreManager.Getters.ReadMember(id);
    }

    /**
     * 
     * @param value
     * @returns
     */
    static UpdateMember(value) {
        return StoreManager.Getters.Update(value);
    }

    /**
     * 
     * @param id
     */
    static DeleteMember(id) {
        //return StoreManager.Dispatch('DeleteMember', id);
    }

    /**
     * 
     */
    private static get Getters() {
        return StoreManager.Store.getters;
    }

    /**
     * 
     */
    private static get Dispatch() {
        return StoreManager.Store.dispatch;
    }
}
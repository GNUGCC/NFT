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
        console.log('get Authentication', StoreManager.Member != null && StoreManager.Member);
        return StoreManager.Member != null && StoreManager.Member;
    }

    /**
     * 
     */
    static set Authentication(value) {
        StoreManager.Dispatch('Member', value);
        console.log('set Authentication', value, StoreManager.Member != null && StoreManager.Member);
    }

    /**
     * 
     */
    static get Member() {
        //console.log('get Member: ', getters.Member(StoreManager.Store));        
        return StoreManager.Getters.Member;
        //return getters.Member(StoreManager.Store);
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
        return StoreManager.Dispatch('Update', value);
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
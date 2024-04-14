import { ref } from 'vue';
import { Router } from 'vue-router';
import { FormInstance } from 'element-plus';
import type { MemberType } from '@/model/member';

const FormRef = ref<FormInstance>();
const Form = ref<MemberType>({});
const Home = ({ router }) => router.push({ path: '/' });
const Register = ({ router }) => router.push({ path: '/register' });
const LoginOut = ({ store }) => store.dispatch('Member', null);

function GetRoutParams(router: Router) {
    return router.currentRoute.value.params;
}

function LoadData(params, store, result: (data) => void) {
    const { id } = params;
    console.log('loadData: ', params);
    const data = store.getters.ReadMember(id);

    if (data) {
        console.log('find: ', data);
        return result(data.result);
    }

    const temp = { id, name: '測試資料', email: 'test@yahoo.com', mobile: '12345' };
    console.log('newEdit: ', temp);
    return result(temp);
    //store.dispatch('Member', newdata)
    //    .then(() => {
    //        console.log('newEdit: ', store.getters.Members);
    //        result(newdata);
    //    });

    //return data && data.result;
}

export {
    FormRef,
    Form,
    Home,
    Register,
    LoginOut,
    LoadData,
    GetRoutParams
}
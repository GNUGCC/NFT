import { reactive, ref } from 'vue';
import { FormInstance } from 'element-plus';
import type { MemberType } from '@/model/member';

const FormRef = ref<FormInstance>();
const Form = reactive<MemberType>({});
const Home = ({ router }) => router.push({ path: '/' });
const Register = ({ router }) => router.push({ path: '/register' });
const LoginOut = ({ store }) => store.dispatch('Member', null);

export {
    FormRef,
    Form,
    Home,
    Register,
    LoginOut
}
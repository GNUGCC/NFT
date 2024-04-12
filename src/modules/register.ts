import { computed, ref, reactive } from 'vue';
import { FormInstance } from 'element-plus';
import { InternalRegister } from '@/api/account';
import type { MemberType } from '@/model/member';

const FormRef = ref<FormInstance>();
const Form = reactive<MemberType>({});
const FormField = reactive<MemberType>({});
const LoginUser = computed(() => FormField);
const Home = ({ router }) => router.push({ path: '/' });
const Register = ctx => {
    FormRef.value?.validate(valid => {
        if (valid == false) return;
        InternalRegister(FormField.name, FormField.password)
            .then(x => {
                const { store } = ctx;
                console.log('使用者註冊: ', LoginUser.value, x);
                store.dispatch('Member', {
                    name: FormField.name,
                    password: FormField.password,
                    data: x
                }).then(() => Home(ctx));
            })
            .catch(err => {
                console.log('登入錯誤: ', err);
            });
    });
};

export {
    Register,    
    LoginUser,
    Home,
    Form,
    FormField,
    FormRef
}
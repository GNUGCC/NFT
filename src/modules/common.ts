import { ref } from 'vue';
import { FormInstance } from 'element-plus';
import { StoreManager, RouteManager, LogManager } from '@/utils/manager';
import { type MemberType } from '@/models/member';

const FormRef = ref<FormInstance>();
const Form = ref<MemberType>({});

/**
 * 
 */
function Home() {
    Log('home: ', StoreManager);
    RouteManager.Home();
}

/**
 * 
 */
function Register(){
    RouteManager.Register();
}

/**
 * 
 */
function LoginOut() {
    StoreManager.Member = null;
}

/**
 * 
 * @param data
 */
function Log(...data: any[]) {
    LogManager.Log(...data);
}

/**
 * 
 * @param data
 */
function LogGroup(...data: any[]) {
    LogManager.LogGroup(...data);
}

/**
 * 
 * @param message
 * @param type
 */
function LogPopup(message: string, type: 'success' | 'error' | 'warning') {
    LogManager.LogPopup(message, type);
}

/**
 * 
 * @param result
 * @returns
 */
function LoadData(result: (data) => void) {
    const { id } = RouteManager.Params;
    Log('loadData: ', id);
    const data = StoreManager.ReadMember(id);
    return data && result(data.result);

    //if (data) {
    //    Log('find: ', data);
    //    return result(data.result);
    //}

    //const temp = { id, name: '測試資料', email: 'test@yahoo.com', mobile: '12345' };
    //Log('newEdit: ', temp);
    //return result(temp);  
}

export {
    FormRef,
    Form,
    Home,
    Log,
    LogGroup,
    LogPopup,
    Register,
    LoginOut,
    LoadData
}
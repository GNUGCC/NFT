import { Form, Home, GetRoutParams } from './common';
import { InternalUpdate } from '@/api/account';

/**
 * 
 * @param param0
 * @param valid
 * @returns
 */
const Save = ({ _, router, store }, valid) => {
    if (valid == false) return;

    const { id } = GetRoutParams(router);
    const { name, password, account, email, mobile } = Form.value;
    InternalUpdate({ id, name, password, account, email, mobile })
        .then(x => {
            console.log('使用者更新資料: ', Form.value, x, router, store);
            store.dispatch('Member', Form.value).then(() => {
                alert('更新會員資料成功!');
                Home({ router });
            });
        })
        .catch(err => {
            console.log('更新錯誤: ', err);
            alert('更新錯誤');
        }); 
}

/**
 * 
 * @param param0
 * @param valid
 * @returns
 */
const Cancel = ({ _, router, __ }, valid) => Home({ router });

export {
    Save,
    Cancel
}
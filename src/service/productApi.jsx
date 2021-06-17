import { domain } from './config';


// Trong xu li API thi dung JSON de truyen du lieu giua FE va BE - JSON la 1 object voi du lieu ben trong la kieu du lieu nguyen thuy - k truyen duoc function, 1 so object dac biet nhu: new FormDaTa.v.v..
//fetch la xu li API lq den BE - la bat dong bo - tra ve 1 promise (tham so dau tien la link goi API, tham so t2 la cac option cua request)


const ProductApi = {
    category() {
        return fetch(`${domain}/categories`, {
            method: 'GET',
        }).then(res => res.json())
    },
    product(slug) {
        return fetch(`${domain}/product?${slug}`, {
            method: 'GET',
        }).then(res => res.json())
    },
    detail(slug) {
        return fetch(`${domain}/product?${slug}`, {
            method: 'GET',
        }).then(res => res.json())
    },

}

export default ProductApi
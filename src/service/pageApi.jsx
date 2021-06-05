import { endpoint } from './config';

const PageApi = {
    Faq() {
        return fetch(`${endpoint}/faq`, {
            method: 'GET',
        }).then(res => res.json())
    },
    Contact() {
        return fetch(`${endpoint}/contact`, {
            method: 'GET',
        }).then(res => res.json())
    },
    Store(slug) {
        return fetch(`${endpoint}/store?${slug}`, {
            method: 'GET',
        }).then(res => res.json())
    },

}

export default PageApi
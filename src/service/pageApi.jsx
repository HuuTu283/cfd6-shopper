import { domain } from './config';

const PageApi = {
    Faq() {
        return fetch(`${domain}/faq`, {
            method: 'GET',
        }).then(res => res.json())
    },
    Contact() {
        return fetch(`${domain}/contact`, {
            method: 'GET',
        }).then(res => res.json())
    },
    Store(slug) {
        return fetch(`${domain}/store?${slug}`, {
            method: 'GET',
        }).then(res => res.json())
    },

}

export default PageApi
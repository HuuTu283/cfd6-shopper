
import { endpoint } from './config';

const Auth = {
    async refreshToken() {
        let refreshToken = JSON.parse(localStorage.getItem('token'))?.refreshToken
        let accessToken = JSON.parse(localStorage.getItem('token'))?.accessToken

        let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
            method: 'POST',
            body: JSON.stringify({
                refreshToken: refreshToken

            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => res.json())
        if (res?.data?.accessToken) {
            localStorage.setItem('token', JSON.stringify(res.data))
        }

        return true;
    },

    login(data) {
        //fetch la xu li API lq den BE - la bat dong bo - tra ve 1 promise (tham so dau tien la link goi API, tham so t2 la cac option cua request)
        return fetch(`${endpoint}/login`, {
            method: 'POST', // request kieu POST
            //gui len backend du lieu thi truyen vao body
            body: JSON.stringify(data), //trong {} la kieu du lieu dang JSON
            headers: {
                'Content-Type': 'application/json'
            } //truyen JSON len backend, phai co buoc nay de backend nhan duoc
        }).then(res => res.json())
    },


    register(data) {
        return fetch(`${endpoint}/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },


    update(data) {
        let token = JSON.parse(localStorage.getItem('token'))?.accessToken
        return fetch(`${endpoint}/update-profile`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => tokenHandle(res, () => {
            let token = JSON.parse(localStorage.getItem('token'))?.accessToken
            return fetch(`${endpoint}/update-profile`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => res.json())
        }))
    }

}

export async function tokenHandle(res, callback) {
    if (res.status === 200) {
        return res.json()
    }

    if (res.status === 403) {
        await Auth.refreshToken()
        let token = JSON.parse(localStorage.getItem('token'))?.accessToken
        return callback()
    }
}

export default Auth;
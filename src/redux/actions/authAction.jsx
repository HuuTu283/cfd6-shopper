import Auth from "../../service/auth";
import { LOGIN, LOGOUT, REGISTER, UPDATE } from "../type";



export function loginAction(data) {
    return {
        type: LOGIN,
        payload: data
    }
}

export function logoutAction() {
    return {
        type: LOGOUT
    }
}

export function updateAction(data) {

    return {
        type: UPDATE,
        payload: data
    }
    return async (dispatch) => {
        let res = await Auth.update(data)
        if (res.data) {
            dispatch({
                type: UPDATE,
                payload: res.data
            })
        }
        // }else if (res.error) {
        //     dispatch({
        //         type: ERROR,
        //         payload: res.error
        //     })
        // }
    }
}

export function checkRegister(data) {
    return {
        type: REGISTER,
        payload: data
    }
}
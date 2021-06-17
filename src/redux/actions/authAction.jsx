import Auth from "../../service/auth";
import { LOGIN, LOGOUT, REGISTER, UPDATE, ERROR } from "../type";



export function checkRegister(data) {

    return async (dispatch) => {
        let res = await Auth.register(data)
        if (res.data) {
            dispatch({
                type: REGISTER,
                payload: res.success,
            });
        } else if (res.error) {
            dispatch({
                type: REGISTER,
                payload: res.error,
            });
        }
    };
}



export function loginAction(data) {
    return async (dispatch) => {
        let res = await Auth.login(data);
        if (res.data) {
            dispatch({
                type: LOGIN,
                payload: res.data,
            });
        } else if (res.error) {
            dispatch({
                type: ERROR,
                payload: res.error,
            });
        }
    };

}

export function logoutAction() {
    return {
        type: LOGOUT
    }

}

export function updateAction(data) {

    return async (dispatch) => {
        let res = await Auth.update(data)
        if (res.data) {
            dispatch({
                type: UPDATE,
                payload: res.data
            })
        } else if (res.error) {
            dispatch({
                type: ERROR,
                payload: res.error,
            });
        }
    }
}

import { LOGIN, LOGOUT, REGISTER, UPDATE, ERROR } from '../type';

import reduxToolkit from "../../core/reduxToolkit"


let initState = {
    login: JSON.parse(localStorage.getItem('login')),
    status: '',
    statusRegister: '',

}

export default function authReducer(state = initState, action) {

    switch (action.type) {
        case ERROR:
            return {
                ...state,
                status: action.payload
            }

        case REGISTER:
            return {
                ...state,
                statusRegister: action.payload
            }

        case LOGIN:
            localStorage.setItem('login', JSON.stringify(action.payload))
            localStorage.setItem("token", JSON.stringify(action.payload.token))
            return {
                ...state,
                login: action.payload
            }

        case LOGOUT:
            localStorage.setItem('login', false)
            localStorage.removeItem("token");
            return {
                ...state,
                login: false

            }

        case UPDATE:
            localStorage.setItem('login', JSON.stringify(action.payload))
            return {
                ...state,
                login: action.payload,
            }

        default:
            return state
    }
}

// let { action, reducer, TYPE } = reduxToolkit({
//     initialState: initState,
//     name: 'auth',
//     reducers: {
//         login: (state, action) => {
//             localStorage.setItem('login', JSON.stringify(action.payload))
//             return {
//                 ...state,
//                 login: action.payload
//             }
//         },
//         logout: (state, action) => {
//             localStorage.setItem('login', false)
//             return {
//                 ...state,
//                 login: false

//             }
//         },
//         register: (state, action) => {
//             return {
//                 ...state,
//                 statusRegister: action.payload
//             }
//         },
//         update: (state, action) => {
//             localStorage.setItem('login', JSON.stringify(action.payload))
//             return {
//                 ...state,
//                 login: action.payload,
//             }
//         }
//     },

// })
// export default reducer
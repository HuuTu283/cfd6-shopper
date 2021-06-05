import { LOGIN, LOGOUT, REGISTER, UPDATE } from '../type';

import reduxToolkit from "../../core/reduxToolkit"


let initState = {
    login: JSON.parse(localStorage.getItem('login')),
    statusRegister: "",

}

export default function authReducer(state = initState, action) {

    switch (action.type) {
        case LOGIN:

            localStorage.setItem('login', JSON.stringify(action.payload))
            return {
                ...state,
                login: action.payload
            }
        case LOGOUT:

            localStorage.setItem('login', false)
            return {
                ...state,
                login: false

            }
        case REGISTER:

            return {
                ...state,
                statusRegister: action.payload
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
    return state

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
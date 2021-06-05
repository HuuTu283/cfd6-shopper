import { combineReducers, createStore } from "redux"
import authReducer from './reducer/authReducer';

//noi su dung thi useSelector de lay state tu file nay (store) - goi action trong file nay (store) dung useDispatch trueyn vao du lieu de day vao action

let reducer = combineReducers({
    authReducer: authReducer
})
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
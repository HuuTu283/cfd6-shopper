import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from './reducer/authReducer';
import productReducer from './reducer/productReducer';


//noi su dung thi useSelector de lay state tu file nay (store) - goi action trong file nay (store) dung useDispatch trueyn vao du lieu de day vao action

let reducer = combineReducers({
    authReducer: authReducer,
    productReducer: productReducer
})

const middleware = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState())
    }

    return next(action)

}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)))
export default store

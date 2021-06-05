import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'


export default function PrivateRoute(props) {
    // let { login } = useAuth()
    let { login } = useSelector(store => store.authReducer)

    if (!login) {

        return <Route>
            <Redirect to="/dang-nhap" />
        </Route>
    }
    return <Route {...props} />
}

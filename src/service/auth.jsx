
import Api from 'core/Api';


const Auth = {

    update(data) { return Api.token().post('/update-profile', data) },

    login(data) { return Api.post('/login', data) },

    register(data) { return Api.post('/register', data) },

}


export default Auth;
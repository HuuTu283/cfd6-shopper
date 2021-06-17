//chua update

import { useDispatch, useSelector } from "react-redux"
import useValidateForm from "../../../core/useValidateForm"
import Auth from '../../../service/auth';
import { loginAction } from '../../../redux/actions/authAction';
import { useState } from "react";
import { Redirect } from 'react-router-dom';




export default function SignIn() {
    const [loginError, setLoginError] = useState(null)
    let { login } = useSelector(store => store.authReducer)


    let { form, error, inputChange, check } = useValidateForm({
        username: '',
        password: ''

    }, {
        rules: {

            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                // pattern: 'password',
                min: 8,
                max: 32
            }
        },
        message: {
            username: {
                required: 'Email cannot be blank. Please enter your email!',
                pattern: 'Please enter a valid email address. Ex: example@gmail.com...'
            },
            password: {
                required: 'Password cannot be blank. Please enter your password!',
                pattern: 'Your password must contain number, special characters, uppercase...'
            },
        },

    })

    let dispatch = useDispatch();

    async function loginHandle(e) {
        e.preventDefault();
        let errorObj = check()


        if (Object.keys(errorObj).length === 0) {
            let res = await Auth.login(form)
            if (res.data) {
                dispatch(loginAction(res.data))

            } else if (res.error) {
                setLoginError(res.error)
            }
        }
    }

    if (login) {
        return <Redirect to="/tai-khoan" />
    }

    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Returning Customer</h6>
                    {loginError && <p className="error-text">{loginError}</p>}


                    {/* Form */}
                    <form>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginEmail">
                                        Email Address *
                                    </label>
                                    <input name="username" value={form.username} onChange={inputChange} className="form-control form-control-sm" id="loginEmail" type="email" placeholder="Email Address *" required />
                                    {
                                        error.username && <p className="error-text">{error.username}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginPassword">
                                        Password *
                                    </label>
                                    <input value={form.password} name="password" onChange={inputChange} className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" required />
                                    {
                                        error.password && <p className="error-text">{error.password}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Remember */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="loginRemember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group">
                                    <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                        Password?</a>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button onClick={loginHandle} className="btn btn-sm btn-dark" type="submit" >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

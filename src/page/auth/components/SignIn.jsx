import { useDispatch, useSelector } from "react-redux"
import Auth from '../../../service/auth';
import { loginAction } from '../../../redux/actions/authAction';
import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { ErrorMessage, useForm } from "core/useform";




export default function LogIn() {
    let { login, status } = useSelector(store => store.authReducer)

    let { register, handleSubmit, error } = useForm({
        username: '',
        password: ''
    }, {
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

    function formSubmit(form) {
        dispatch(loginAction(form))
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
                    <ErrorMessage error={status} />
                    {/* Form */}
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginEmail">
                                        Email Address *
                                    </label>
                                    <input className="form-control form-control-sm" type="email" placeholder="Email Address *" {...register('username', { required: true, pattern: 'email' })} />
                                    <ErrorMessage error={error.username} />
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginPassword">
                                        Password *
                                    </label>
                                    <input className="form-control form-control-sm" type="password" placeholder="Password *" {...register('password', { required: true, min: 8, max: 32 })} />
                                    <ErrorMessage error={error.password} />
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
                                <button className="btn btn-sm btn-dark" type="submit" >
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
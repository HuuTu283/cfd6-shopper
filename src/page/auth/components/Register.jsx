import useValidateForm from "../../../core/useValidateForm"
import Auth from "../../../service/auth"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkRegister } from "../../../redux/actions/authAction";

import { ErrorMessage, useForm } from "core/useform";


export default function Register() {
    let { statusRegister } = useSelector(state => state.authReducer)
    let dispatch = useDispatch()

    let { register, handleSubmit, error } = useForm({
        firstname: '',
        lastname: '',
        email: '',
        password: '',

    }, {
        message: {
            firstname: {
                required: 'Firstname cannot be blank. Please enter your Firstname!',
                pattern: '()[]{}*&^%$#@! and numbers are not allowed!'
            },
            lastname: {
                required: 'Lastname cannot be blank. Please enter your Lastname!',
                pattern: '()[]{}*&^%$#@! and numbers are not allowed!'
            },
            email: {
                required: 'Email cannot be blank. Please enter your email!',
                pattern: 'Please enter a valid email address. Ex: example@gmail.com...'
            },
            password: {
                required: 'Password cannot be blank. Please enter your password!',
                pattern: 'Your password must contain number, special characters, uppercase...'
            },
            confirm_password: {
                required: 'Confirm your password!',
            },
        }
    })

    function registerSubmit(form) {
        dispatch(checkRegister(form))
    }


    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">New Customer</h6>

                    <ErrorMessage error={statusRegister} />

                    {/* Form */}
                    <form onSubmit={handleSubmit(registerSubmit)}>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerFirstName">
                                        First Name *
                                    </label>
                                    <input {...register('firstname', { required: true, pattern: 'name' })} className="form-control form-control-sm" type="text" placeholder="First Name *" />

                                    <ErrorMessage error={error.firstname} />
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerLastName">
                                        Last Name *
                                    </label>
                                    <input {...register('lastname', { required: true, pattern: 'name' })} className="form-control form-control-sm" type="text" placeholder="Last Name *" />

                                    <ErrorMessage error={error.lastname} />
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerEmail">
                                        Email Address *
                                    </label>

                                    <input {...register('email', { required: true, pattern: 'email' })} className="form-control form-control-sm" type="email" placeholder="Email Address *" />

                                    <ErrorMessage error={error.email} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPassword">
                                        Password *
                                    </label>
                                    <input {...register('password', { required: true, min: 8, max: 32, pattern: 'password' })} className="form-control form-control-sm" type="password" placeholder="Password *" />

                                    <ErrorMessage error={error.password} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPasswordConfirm">
                                        Confirm Password *
                                    </label>
                                    <input {...register('confirm_password', { required: true, match: 'password' })} className="form-control form-control-sm" type="password" placeholder="Confrm Password *" />

                                    <ErrorMessage error={error.confirm_password} />
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group font-size-sm text-muted">
                                    By registering your details, you agree with our Terms &amp; Conditions,
                                    and Privacy and Cookie Policy.
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Newsletter */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="registerNewsletter">
                                            Sign me up for the Newsletter!
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-sm btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

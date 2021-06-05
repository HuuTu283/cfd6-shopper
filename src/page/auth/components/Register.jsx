import useValidateForm from "../../../core/useValidateForm"
import Auth from "../../../service/auth"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkRegister } from "../../../redux/actions/authAction";


export default function Register() {
    let [register, setRegister] = useState(null)
    let { statusRegister } = useSelector(state => state.authReducer)
    let dispatch = useDispatch()

    let { form, error, inputChange, check } = useValidateForm({
        firstname: '',
        lastname: '',
        email: '',
        password: '',

    }, {
        rules: {
            firstname: {
                required: true,
                pattern: 'name',
                namemin: 2,
                namemax: 32
            },
            lastname: {
                required: true,
                pattern: 'name',
                namemin: 2,
                namemax: 32
            },
            email: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                pattern: 'password',
                min: 8,
                max: 32
            },

        },
        message: {
            firstname: {
                required: 'Name cannot be blank. Please enter your fullname!',
                pattern: '()[]{}*&^%$#@! and numbers are not allowed!'
            },
            lastname: {
                required: 'Name cannot be blank. Please enter your fullname!',
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
        }
    })

    async function onSubmit(e) {
        e.preventDefault();
        let errorObj = check()


        setRegister('Something went wrong. We were unable to send your request!')

        if (Object.keys(errorObj).length === 0) {
            let res = await Auth.register({
                email: form.email,
                password: form.password
            })
            if (res) {
                dispatch(checkRegister(res))
            } else if (res.error) {
                let err = "vui long nhap lai thong tin"
                dispatch(checkRegister(err))
            }
        }

    }


    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">New Customer</h6>

                    {statusRegister && <p className="error-text">{statusRegister}</p>}

                    {/* Form */}
                    <form>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerFirstName">
                                        First Name *
                                    </label>
                                    <input name="firstname" value={form.firstname} onChange={inputChange} className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *" required />
                                    {
                                        error.firstname && <p className="error-text">{error.firstname}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerLastName">
                                        Last Name *
                                    </label>
                                    <input name="lastname" value={form.lastname} onChange={inputChange} className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *" required />
                                    {
                                        error.lastname && <p className="error-text">{error.lastname}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerEmail">
                                        Email Address *
                                    </label>

                                    <input name="email" value={form.email} onChange={inputChange} className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *" required />
                                    {
                                        error.email && <p className="error-text">{error.email}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPassword">
                                        Password *
                                    </label>
                                    <input name="password" value={form.password} onChange={inputChange} className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" required />
                                    {
                                        error.password && <p className="error-text">{error.password}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPasswordConfirm">
                                        Confirm Password *
                                    </label>
                                    <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" required />
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
                                <button onClick={onSubmit} className="btn btn-sm btn-dark" type="submit">
                                    Register
                                </button>
                                {register && <p className="error-text">{register}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

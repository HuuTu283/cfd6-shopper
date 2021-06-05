import useValidateForm from "../../../core/useValidateForm"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from "../../../service/auth";
import { updateAction } from "../../../redux/actions/authAction";


export default function Info() {
    let [info, setInfo] = useState(null)
    let { login } = useSelector(store => store.authReducer)
    let dispatch = useDispatch()

    let { form, error, inputChange, check } = useValidateForm({
        first_name: login.first_name,
        last_name: login.last_name,
        email: login.email,
        password: '',

    }, {
        rules: {
            first_name: {
                required: true,
                pattern: 'name',
                namemin: 2,
                namemax: 32
            },
            last_name: {
                required: true,
                pattern: 'name',
                namemin: 2,
                namemax: 32
            },
            // email: {
            //     required: true,
            //     pattern: 'email'
            // },
            password: {
                required: true,
                pattern: 'password',
                min: 8,
                max: 32
            },

        },
        message: {
            first_name: {
                required: 'Name cannot be blank. Please enter your fullname!',
                pattern: '()[]{}*&^%$#@! and numbers are not allowed!'
            },
            last_name: {
                required: 'Name cannot be blank. Please enter your fullname!',
                pattern: '()[]{}*&^%$#@! and numbers are not allowed!'
            },
            // email: {
            //     required: 'Email cannot be blank. Please enter your email!',
            //     pattern: 'Please enter a valid email address. Ex: example@gmail.com...'
            // },
            password: {
                required: 'Password cannot be blank. Please enter your password!',
                pattern: 'Your password must contain number, special characters, uppercase...'
            },
        }
    })

    async function onSubmit(e) {
        e.preventDefault();
        let errorObj = check()

        setInfo('Something went wrong. We were unable to send your request!')

        if (Object.keys(errorObj).length === 0) {
            let res = await Auth.update(form)
            console.log(form)
            console.log(res)
            if (res.data) {
                console.log(res.data);
                dispatch(updateAction(res.data))

            }
            setInfo('Thank you! Your request has been submitted.')
        }

    }


    return (

        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountFirstName">
                                First Name *
                            </label>
                            <input name="first_name" value={form.first_name} onChange={inputChange} className="form-control form-control-sm" id="accountFirstName" type="text" placeholder="First Name *" defaultValue={form.first_name} required />
                            {
                                error.first_name && <p className="error-text">{error.first_name}</p>
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountLastName">
                                Last Name *
                            </label>
                            <input name="last_name" value={form.last_name} onChange={inputChange} className="form-control form-control-sm" id="accountLastName" type="text" placeholder="Last Name *" defaultValue={form.last_name} required />
                            {
                                error.last_name && <p className="error-text">{error.last_name}</p>
                            }
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountEmail">
                                Email Address *
                            </label>
                            <input name="email" value={form.email} onChange={inputChange} disabled className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" defaultValue={form.email} required />
                            {/* {
                                error.email && <p className="error-text">{error.email}</p>
                            } */}
                        </div>
                    </div>





                    {/* Password */}
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="accountPassword">
                                Current Password *
                            </label>
                            <input className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="AccountNewPassword">
                                New Password *
                            </label>
                            <input name="password" value={form.password} onChange={inputChange} className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" required />
                            {
                                error.password && <p className="error-text">{error.password}</p>
                            }
                        </div>
                    </div>





                    <div className="col-12 col-lg-6">
                        {/* Birthday */}
                        <div className="form-group">
                            {/* Label */}
                            <label>Date of Birth</label>
                            {/* Inputs */}
                            <div className="form-row">
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountDate">
                                        Date
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountDate">
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected>12</option>
                                    </select>
                                </div>
                                <div className="col">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountMonth">
                                        Month
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountMonth">
                                        <option>January</option>
                                        <option selected>February</option>
                                        <option>March</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountYear">
                                        Year
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountYear">
                                        <option>1990</option>
                                        <option selected>1991</option>
                                        <option>1992</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Gender */}
                        <div className="form-group mb-8">
                            <label>Gender</label>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-outline-border active">
                                    <input type="radio" name="gender" defaultChecked /> Male
                                </label>
                                <label className="btn btn-sm btn-outline-border">
                                    <input type="radio" name="gender" /> Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <button onClick={onSubmit} className="btn btn-dark" type="submit">Save Changes</button>
                        {info && <p className="error-text">{info}</p>}
                    </div>
                </div>
            </form>
        </div>

    )
}

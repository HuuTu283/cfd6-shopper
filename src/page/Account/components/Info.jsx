
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAction } from "../../../redux/actions/authAction";
import { useForm } from "core/useform/useForm";
import { ErrorMessage } from "core/useform/ErrorMessage";


export default function Info() {
    let { login, status } = useSelector(store => store.authReducer)

    let yearNow = new Date().getFullYear()
    const [day, setDay] = useState()
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(yearNow)


    let { register, handleSubmit, error } = useForm({
        first_name: login.first_name,
        last_name: login.last_name,
        email: login.email,
        confirm_password: '',

    }, {
        message: {
            first_name: {
                required: 'Name cannot be blank. Please enter your Firstname!',
                pattern: '()[]{}*&^%$#@! and numbers are not allowed!'
            },
            last_name: {
                required: 'Name cannot be blank. Please enter your Lastname!',
                pattern: '()[]{}*&^%$#@! and numbers are not allowed!'
            },
            confirm_password: {
                required: 'Confirm your password!',
            },
        }
    })

    let dispatch = useDispatch()

    function infoSubmit(form) {
        dispatch(updateAction(form))
    }

    function dateChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'year') setYear(parseInt(value))
        if (name === 'month') setMonth(parseInt(value))
        if (name === 'day') setDay(parseInt(value))
    }

    let date = new Date(year, month, 0)
    let dayArray = date.getDate()


    return (

        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}
            <form onSubmit={handleSubmit(infoSubmit)}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountFirstName">
                                First Name *
                            </label>
                            <input {...register('first_name', { required: true, pattern: 'name' })} className="form-control form-control-sm" type="text" />
                            <ErrorMessage error={error.first_name} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountLastName">
                                Last Name *
                            </label>
                            <input {...register('last_name', { required: true, pattern: 'name' })} className="form-control form-control-sm" type="text" />
                            <ErrorMessage error={error.last_name} />
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="accountEmail">
                                Email Address
                            </label>
                            <input {...register('email')} disabled className="form-control form-control-sm" type="email" />
                        </div>
                    </div>
                    {/* Password */}
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="accountPassword">
                                Current Password
                            </label>
                            <input {...register('password')} className="form-control form-control-sm" type="password" />
                            <ErrorMessage error={error.password} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="AccountNewPassword">
                                Confirm Password *
                            </label>
                            <input {...register('confirm_password', { required: true, match: 'password', enabled: 'password' })} className="form-control form-control-sm" type="password" />
                            <ErrorMessage error={error.confirm_password} />
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
                                    <select className="custom-select custom-select-sm" id="accountDate" name="day" value={day} onChange={dateChange} >
                                        {
                                            [...Array(dayArray)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="col">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountMonth">
                                        Month
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountMonth" name="month" value={month} onChange={dateChange}>
                                        {
                                            [...Array(12)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountYear">
                                        Year
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountYear" name="year" value={year} onChange={dateChange}>
                                        {
                                            [...Array(50)].map((e, i) => <option value={yearNow - i} key={i}>{yearNow - i}</option>)
                                        }
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
                        <button className="btn btn-dark" type="submit">Save Changes</button>
                        <ErrorMessage error={status} />
                    </div>
                </div>
            </form>
        </div>

    )
}

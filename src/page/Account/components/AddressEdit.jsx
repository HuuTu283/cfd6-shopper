import useValidateForm from '../../../core/useValidateForm';

export default function AddressEdit() {

    let { form, error, inputChange, check } = useValidateForm({
        email: '',
        password: '',
        country: '',
        address: '',
        city: '',
        zip: '',
        phone: '',

    }, {
        rules: {

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
            country: { required: true },
            address: { required: true },
            city: { required: true },
            zip: { required: true },
            phone: { required: true, pattern: 'phone' },
        },
        message: {
            email: {
                required: 'Email cannot be blank. Please enter your email!',
                pattern: 'Please enter a valid email address. Ex: example@gmail.com...'
            },
            password: {
                required: 'Password cannot be blank. Please enter your password!',
                pattern: 'Your password must contain Number, Special Characters, Uppercase...'
            },
            country: {
                required: 'Country cannot be blank. Please enter your country!',
            },
            address: { required: 'Address cannot be blank. Please enter your address!', },
            city: { required: 'Town/City cannot be blank. Please enter your town/city!', },
            zip: { required: 'ZIP cannot be blank. Please enter your ZIP code!', },
            phone: {
                required: 'Phone cannot be blank. Please enter your phone number!',
                pattern: 'Please enter your phone number in VietNam format and only 10 digits.'
            },
        }
    })

    async function addAddress() {
        let errorObj = check()


        if (Object.keys(errorObj).length === 0) {


        }

    }
    return (

        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Heading */}
            <h6 className="mb-7">
                Add Address
            </h6>
            {/* Form */}
            <form>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name *</label>
                            <input className="form-control" id="firstName" type="text" placeholder="First Name" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name *</label>
                            <input className="form-control" id="lastName" type="text" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email Address *</label>
                            <input name="email" value={form.email} onChange={inputChange} className="form-control" id="emailAddress" type="email" placeholder="Email Address" required />
                            {
                                error.email && <p className="error-text">{error.email}</p>
                            }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input className="form-control" id="companyName" type="text" placeholder="Company Name" required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="country">Country *</label>
                            <input name="country" value={form.country} onChange={inputChange} className="form-control" id="country" type="text" placeholder="Country" required />
                            {
                                error.country && <p className="error-text">{error.country}</p>
                            }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="addressLineOne">Address Line 1 *</label>
                            <input name="address" value={form.address} onChange={inputChange} className="form-control" id="addressLineOne" type="text" placeholder="Address Line 1" required />
                            {
                                error.address && <p className="error-text">{error.address}</p>
                            }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="addressLineTwo">Address Line 2</label>
                            <input className="form-control" id="addressLineTwo" type="text" placeholder="Address Line 2" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="townCity">Town / City *</label>
                            <input name="city" value={form.city} onChange={inputChange} className="form-control" id="townCity" type="text" placeholder="Town / City" required />
                            {
                                error.city && <p className="error-text">{error.city}</p>
                            }
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="zipPostcode">ZIP / Postcode *</label>
                            <input name="zip" value={form.zip} onChange={inputChange} className="form-control" id="zipPostcode" type="text" placeholder="ZIP / Postcode" required />
                            {
                                error.zip && <p className="error-text">{error.zip}</p>
                            }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="mobilePhone">Mobile Phone *</label>
                            <input name="phone" value={form.phone} onChange={inputChange} className="form-control" id="mobilePhone" type="tel" placeholder="Mobile Phone" required />
                            {
                                error.phone && <p className="error-text">{error.phone}</p>
                            }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="defaultDeliveryAddress" />
                                <label className="custom-control-label" htmlFor="defaultDeliveryAddress">Default delivery address</label>
                            </div>
                            <div className="custom-control custom-checkbox mb-0">
                                <input type="checkbox" className="custom-control-input" id="defaultShippingAddress" />
                                <label className="custom-control-label" htmlFor="defaultShippingAddress">Default shipping address</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Button */}
                <button onClick={addAddress} className="btn btn-dark" type="submit">
                    Add Address
                </button>
            </form>
        </div>

    )
}

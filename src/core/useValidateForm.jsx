import { useState } from "react";

let namePattern = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*((-|\s)*[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]){2,30}$/,
    emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    phonePattern = /(0[3|5|7|8|9])+([0-9]{8})\b/i,
    urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
    passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export default function useValidateForm(initialForm, validate) { // (gia tri form ban dau, rule validate)
    let [form, setForm] = useState(initialForm)
    let [error, setError] = useState({})

    function inputChange(e) {
        let name = e.target.name;
        let value = e.target.value;


        setForm({
            ...form,
            [name]: value
        })
    }

    function check() {
        let errorObj = {};
        let { rules, message } = validate
        if (!message) {
            message = {}
        }


        for (let i in rules) {
            let r = rules[i];
            let m = message[i] || {};

            if (r.required && !form[i]?.trim()) {
                errorObj[i] = m?.required || "This field is required - You can't leave this field blank"
                continue;
            }

            if (r.pattern && form[i]) {
                let { pattern } = r
                if (pattern === 'name') pattern = namePattern
                if (pattern === 'email') pattern = emailPattern
                if (pattern === 'phone') pattern = phonePattern
                if (pattern === 'url') pattern = urlPattern
                if (pattern === 'password') pattern = passwordPattern

                if (!pattern?.test(form[i])) {
                    errorObj[i] = m?.pattern || 'A specific data format is required for it to be considered valid'
                }

            }

            if (r.min) {
                if (form[i].length < r.min || form[i].length > r.max) {
                    errorObj[i] = `Your password must be between ${r.min} and ${r.max} characters.`
                }
            }

            if (r.namemin) {
                if (form[i].length < r.namemin || form[i].length > r.namemax) {
                    errorObj[i] = `Your name must be between ${r.namemin} and ${r.namemax} characters.`
                }
            }


        }

        setError(errorObj);
        return errorObj;
    }

    return {
        form,
        error,
        inputChange,
        check
    }
}


// form.name.trim().replace(/ +/g, ' ')
// if (!form.name.trim()) {
//     errorObj.name = 'thieu ten'
// }

// if (!form.phone.trim()) {
//     errorObj.phone = 'phone chua nhap'
// } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
//     errorObj.phone = 'phone sai dinh dang'
// }

// if (!form.email.trim()) {
//     errorObj.email = 'sai ten'
// } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
//     errorObj.email = 'sai dinh dang'
// }

// if (form.website.trim() && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(form.website)) {
//     errorObj.website = 'web sai dinh dang'
// }

// if (!form.facebook.trim()) {
//     errorObj.facebook = 'facebook chua nhap'
// } else if (!/^(?:http(s)?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(form.facebook)) {
//     errorObj.facebook = 'facebook sai dinh dang'

// }

// if (!form.skype.trim()) {
//     errorObj.skype = 'skype chua nhap'
// } else if (!/^(?:http(s)?:\/\/)?(www\.)?join.skype.com\/[a-zA-Z0-9(\.\?)?]/.test(form.skype)) {
//     errorObj.skype = 'skype sai dinh dang'

// }





import { useState } from "react";

let namePattern = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*((-|\s)*[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ])$/,
    emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    phonePattern = /(0[3|5|7|8|9])+([0-9]{8})\b/i,
    urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
    passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

export function useForm(initialForm, validate) { // (gia tri form ban dau, rule validate)
    let [form, setForm] = useState(initialForm)
    let [error, setError] = useState({})

    function inputChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        form[name] = value
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


            if (r.enabled) {
                if (!form[r.enabled]) {
                    continue;
                }
            }

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

            if (r.match && form[r.match]) {
                if (form[i] !== form[r.match]) {
                    errorObj[i] = m?.match || `The passwords you entered do not match.`
                }
            }


        }

        setError(errorObj);
        return errorObj;
    }


    function register(name, rules) {

        if (rules) {
            if (!validate.rules) validate.rules = {}
            validate.rules[name] = rules
        }


        return {
            name,
            onChange: inputChange,
            defaultValue: form[name]
        }
    }

    function handleSubmit(callback) {
        return (e) => {
            e.preventDefault();
            let errorObj = check()


            if (Object.keys(errorObj).length === 0) {
                callback(form)
            }
        }
    }

    return {
        register,
        handleSubmit,
        error,
        check,
        form
    }


    // return {
    //     form,
    //     error,
    //     inputChange,
    //     check
    // }
}





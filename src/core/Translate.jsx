import React, { useContext, useState } from 'react'

let initialState = {
    default: localStorage.getItem('language') || 'en'
}
let Context = React.createContext(initialState);


export default function TranslateProvider({ children, translate }) {
    let [state, setState] = useState({ ...initialState, ...translate });

    function t(key) {
        return state?.[state.default]?.[key] || key
    }

    function selectLanguage(languague) {
        localStorage.setItem('language', languague)
        setState({
            ...state,
            default: languague
        })
    }


    return <Context.Provider value={{ t, selectLanguage, languague: state.default }}>
        {children}
    </Context.Provider>
}
export function useTranslate() {
    let { t, selectLanguage, languague } = useContext(Context)


    return {
        t,
        selectLanguage,
        languague
    }
}

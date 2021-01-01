import React from 'react'
import i18n from '../../../i18next'
import s from './Languages.module.sass'

export const Languages: React.FC = (props) => {
    const changeLanguageEn = () => {
        i18n.changeLanguage('en')
    }
    const changeLanguagePl = () => {
        i18n.changeLanguage('pl')
    }
    return(
        <div className={s.lang}>
                <button onClick={changeLanguageEn}> EN </button>
                <button onClick={changeLanguagePl}> PL </button>
        </div>
    )
}
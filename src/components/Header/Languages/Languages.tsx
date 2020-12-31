import React from 'react'
import i18n from '../../../i18next'
import s from './Languages.module.sass'

export const Languages: React.FC = (props) => {
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }
    return(
        <div className={s.lang}>
                <button onClick={() => changeLanguage('en')}> EN </button>

                <button onClick={() => changeLanguage('ru')}> RU </button>

                <button onClick={() => changeLanguage('pl')}> PL </button>


        </div>
    )
}
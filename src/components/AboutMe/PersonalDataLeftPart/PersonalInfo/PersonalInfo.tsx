import React from 'react'
import s from './PersonalInfo.module.sass'
import {v1} from 'uuid'
import {useTranslation} from 'react-i18next'

type PersonalInfoStateType = {
    commonInfo: Array<{ id: string, title: string, text: any }>
}

export const PersonalInfo: React.FC = () => {
    const {t} = useTranslation()
    const state: PersonalInfoStateType = {
        commonInfo: [
            {id: v1(), title: 'Phone', text: t('aboutMe.left.Phone')},
            {id: v1(), title: 'Email',  text: t('aboutMe.left.Email')},
            {id: v1(), title: 'Address', text:  t('aboutMe.left.Address')},
        ]
    }
    const personalInfo = state.commonInfo.map(info =>
        <div className={s.dataInfo} data-aos="fade-in">
            <span>{info.title}</span>
            {info.text}
        </div>
    )
    return (
        <div className={s.data}>
            <div className={s.persInfo}>
                {personalInfo}
            </div>
        </div>
    )
}
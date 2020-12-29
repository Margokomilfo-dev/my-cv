import React from 'react'
import s from './PersonalInfo.module.sass'
import {v1} from 'uuid'

type PersonalInfoStateType = {
    commonInfo: Array<{ id: string, title: string, text: any }>
}
const state: PersonalInfoStateType = {
    commonInfo: [
        {id: v1(), title: 'Phone:', text: '+48 796-027-535'},
        {id: v1(), title: 'Email:', text: 'margokomilfo-dev@gmail.com'},
        {id: v1(), title: 'Address:', text: 'Wroclaw, Poland'},
    ]
}
export const PersonalInfo: React.FC = () => {
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
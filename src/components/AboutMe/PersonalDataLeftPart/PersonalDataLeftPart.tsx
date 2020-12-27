import React from 'react'
import s from './PersonalDataLeftPart.module.sass'
import {v1} from 'uuid'
import styles from '../../../common/commonStyles.module.sass'
// @ts-ignore
import pdf from '../../../assets/docs/CVenglish.pdf'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'

type StateType = {
    commonInfo: Array<{ id: string, title: string, text: any }>
    name: string
}
const state: StateType = {
    commonInfo: [
        {id: v1(), title: 'Phone:', text: '+48 796-027-535'},
        {id: v1(), title: 'Email:', text: 'margokomilfo-dev@gmail.com'},
        {id: v1(), title: 'Address:', text: 'Wroclaw, Poland'},
    ],
    name: 'Marharyta Pryshchapionak'
}

type PersonalDataLeftPartPropsType = {}

export const PersonalDataLeftPart: React.FC<PersonalDataLeftPartPropsType> = (props) => {
    const personalInfo = state.commonInfo.map(info =>
        <div className={s.dataInfo} data-aos="fade-in">
            <span>{info.title}</span>
            {info.text}
        </div>
    )
    return (
        <div className={s.left}>
            <div className={s.data}>
                <div className={s.persInfo}>
                    {personalInfo}
                </div>
            </div>
            <div className={s.signatureBlock}>
                <div className={s.signature} data-aos="fade-in">{state.name}</div>
                <div className={styles.button}>
                    <a href={pdf} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload}/> Download resume</a>
                </div>
            </div>

        </div>
    )
}
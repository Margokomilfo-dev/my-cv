import React from 'react'
import s from './PersonalInfo.module.sass'
import {v1} from 'uuid'
import {useTranslation} from 'react-i18next'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faPhone} from '@fortawesome/free-solid-svg-icons'
// import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
// import {faViber} from '@fortawesome/free-brands-svg-icons'
// import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import phoneImg from './../../../../assets/img/social-icons/telephone.png'
import telegramImg from '../../../../assets/img/social-icons/telegram.png'
import viberImg from '../../../../assets/img/social-icons/viber.png'
import whatsAppImg from '../../../../assets/img/social-icons/whatsapp.png'

type PersonalInfoStateType = {
    phone: {id: string, title: string, text: any, imgPhone: any, imgTelegram: any, imgViber: any, imgWhatsApp: any}
    commonInfo: Array<{ id: string, title: string, text: any }>
}

export const PersonalInfo: React.FC = React.memo(() => {
    const {t} = useTranslation()
    const state: PersonalInfoStateType = {
        phone: {id: v1(), title: 'Phone', text: t('Phone'), imgPhone: phoneImg, imgTelegram: telegramImg, imgViber: viberImg, imgWhatsApp: whatsAppImg},
        commonInfo: [
            {id: v1(), title: 'Email',  text: t('Email')},
            {id: v1(), title: 'Address', text:  t('aboutMe.left.Address')},
        ]
    }
    const personalInfo = state.commonInfo.map(info =>
        <div className={s.dataInfo} data-aos="fade-in" key={info.id}>
            <span>{info.title}</span>
            {info.text}
        </div>
    )

    return (
        <div className={s.data}>
            <div className={s.persInfo}>

                <div className={s.dataInfo} > <span>{state.phone.title}</span> {state.phone.text}

                <div className={s.contactsIcons}>
                    <img src={state.phone.imgPhone} alt="" className={s.contacts}/>
                    <img src={state.phone.imgWhatsApp} alt="" className={s.contacts}/>
                    <img src={state.phone.imgTelegram} alt="" className={s.contacts}/>
                    <img src={state.phone.imgViber} alt="" className={s.contacts}/>
                </div>

                </div>
                {personalInfo}
            </div>
        </div>
    )
})
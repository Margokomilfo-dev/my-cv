import s from './AboutMeCommon.module.sass'
import React from 'react'
import {useTranslation} from 'react-i18next'

export const AboutMeCommon = () => {
    const {t} = useTranslation()
    return (
        <div className={s.text}>
            <p data-aos="fade-in"><span>{t('aboutMe.common.1')}</span></p>
            <p data-aos="fade-in">{t('aboutMe.common.2')}</p>
            <p data-aos="fade-in">{t('aboutMe.common.3')}</p>
        </div>
    )
}
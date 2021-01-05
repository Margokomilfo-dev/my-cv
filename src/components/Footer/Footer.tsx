import React from 'react'
import styles from '../../common/commonStyles.module.sass'
import s from './Footer.module.sass'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {SocialNetworks} from '../Header/SocialNetworks/SocialNetworks'
import {useTranslation} from 'react-i18next'

export const Footer: React.FC = () => {
    const {t} = useTranslation()
    return (
            <div className={s.footer}>
                <div className={styles.container}>
                <p> <FontAwesomeIcon icon={faCopyright}/>2020 <span>{t('name')}</span> <br/>
                    {t('copyright')}</p>
                    <SocialNetworks />
            </div>
        </div>
    )
}
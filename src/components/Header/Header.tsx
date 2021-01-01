import React from 'react'
import s from './Header.module.sass'
import {Avatar} from './Avatar/Avatar'
import {SocialNetworks} from './SocialNetworks/SocialNetworks'
import styles from './../../common/commonStyles.module.sass'
import {Menu} from './Menu/Menu'
import bgr from '../../assets/img/workplaceBgr1.jpg'
import {useTranslation} from 'react-i18next'
import {Languages} from './Languages/Languages'

type HeaderPropsType = {}
export const Header: React.FC<HeaderPropsType> = (props) => {
    const bg = {backgroundImage: `url(${bgr})`}
    const {t} = useTranslation()
    return (
        <div className={s.header} data-aos="fade-in" id='home' style={bg}>
            <Menu/>
            <Languages/>
            <div className={styles.container}>
                <div className={s.contentContainer}>
                    <div className={s.content}>
                        <div className={s.myLogo}> </div>
                        <div className={s.titles}>
                            <h2>{t('name')}</h2>
                            <h3>frontend-developer</h3>
                        </div>
                        <SocialNetworks/>
                    </div>
                </div>
                <Avatar/>
            </div>
        </div>
    )
}



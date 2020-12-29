import React from 'react'
import s from './AboutMe.module.sass'
import {PersonalDataLeftPart} from './PersonalDataLeftPart/PersonalDataLeftPart'
import {HobbiesRightPart} from './HobbiesRightPart/HobbiesRightPart'
import {AboutMeCommon} from './AboutMeCommon/AboutMeCommon'
import styles from '../../common/commonStyles.module.sass'


type AboutMePropsType = {}
export const AboutMe: React.FC<AboutMePropsType> = (props) => {
    return (
        <div className={s.aboutMe} data-aos="fade-in" id='aboutMe'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>About Me</h2>
                    <span className={styles.border}> </span>
                    <AboutMeCommon/>
                </div>
                <div className={s.commonInf}>
                    <PersonalDataLeftPart/>
                    <HobbiesRightPart/>
                </div>
            </div>
        </div>
    )
}
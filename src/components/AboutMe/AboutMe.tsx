import React from 'react'
import s from './AboutMe.module.sass'
import {PersonalDataLeftPart} from './PersonalDataLeftPart/PersonalDataLeftPart'
import {HobbiesRightPart} from './HobbiesRightPart/HobbiesRightPart'
import { AboutMeCommon } from './AboutMeCommon/AboutMeCommon'


type AboutMePropsType = {}
export const AboutMe: React.FC<AboutMePropsType> = (props) => {
    return (
        <div className={s.aboutMe}>
            <div className='container'>
                <div className='blockTitle'>
                    <h2>About Me</h2>
                    <span className='border'> </span>

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
import React from 'react'
import s from './PersonalDataLeftPart.module.sass'

import {PersonalInfo} from './PersonalInfo/PersonalInfo'
import {SignatureBlock} from './SignatureBlock/SignatureBlock'


export const PersonalDataLeftPart: React.FC = () => {
    return (
        <div className={s.left}>
            <PersonalInfo/>
            <SignatureBlock />
        </div>
    )
}


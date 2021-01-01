import React from 'react'
import s from './Block.module.sass'
import {EducationType} from '../MyResume'
import {useTranslation} from 'react-i18next'

type EducationBlockPropsType = {
    edu: EducationType
}
export const EducationBlock: React.FC<EducationBlockPropsType> = (props) => {
    const {t} = useTranslation()
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={`${s.content} ${s.eduBlocksColor}`}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>{props.edu.companyName} <span> ({t('myResume.edu1.country')})</span></h4>

                </div>
                <div className={s.postSubtitle}>
                    faculty of: <span>{props.edu.faculty}</span><br/>
                    from: <span>{props.edu.from}</span> to: <span>{props.edu.to}</span><br/>
                    specialization: <span className={s.specialization}>{props.edu.specialization}</span>
                </div>

            </div>
        </div>
    )
}
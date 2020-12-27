import React from 'react'
import s from './Block.module.sass'
import {CourcesType} from '../MyResume'

type CoursesBlockPropsType = {
    course: CourcesType
}

export const CoursesBlock: React.FC<CoursesBlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={`${s.content} ${s.coursersBlocksColor}`}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4 className={s.coursesName}>{props.course.position}</h4>
                </div>
                <div className={s.postSubtitle}>
                    company name: <span>{props.course.companyName}</span><br/>
                    from: <span>{props.course.from}</span> to: <span>{props.course.to}</span>
                </div>
                <div className={s.postContent}>
                    <p>{props.course.description}</p>
                </div>
            </div>
        </div>
    )
}

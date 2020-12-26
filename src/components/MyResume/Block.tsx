import React from "react"
import s from "./Block.module.sass"
import {CourcesType, EducationType, ExperiencesType} from './MyResume'

type ExperiencesBlockPropsType = {
    exp: ExperiencesType
}
export const ExperiencesBlock: React.FC<ExperiencesBlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={`${s.content} ${s.expBlocksColor}`}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>{props.exp.position}</h4>
                </div>
                <div className={s.postSubtitle}>
                    company name: <span> {props.exp.companyName}</span> <br/>
                    from: <span> {props.exp.from}</span> to: <span> {props.exp.to}</span>
                </div>
                <div className={s.postContent}>
                    <p>{props.exp.description}</p>
                </div>
            </div>
        </div>
    )
}

type EducationBlockPropsType = {
    edu: EducationType
}
export const EducationBlock: React.FC<EducationBlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={`${s.content} ${s.eduBlocksColor}`}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>{props.edu.companyName} <span> (Belarus)</span></h4>

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
                    <h4>{props.course.position}</h4>
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

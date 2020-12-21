import React from "react";
import s from "./Block.module.sass";

type EducationBlockPropsType = {
    companyName: string
    specialization: string
    faculty: string
    from: number
    to: string
    description: string
}
export const EducationBlock: React.FC<EducationBlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={s.content}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>{props.companyName}</h4>
                </div>
                <div className={s.postSubtitle}>
                    <span>{props.faculty}</span>
                    <span className={s.dot}>{props.from} - {props.to}</span>
                </div>
                <div className={s.postContent}>
                    <p>{props.specialization}</p>
                </div>
            </div>
        </div>
    )
}


type ExperiencesBlockPropsType = {
    position:string
    companyName: string
    from: number
    to: string
    description: string
}
export const ExperiencesBlock: React.FC<ExperiencesBlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={s.content}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>{props.position}</h4>
                </div>
                <div className={s.postSubtitle}>
                    <span>{props.companyName}</span>
                    <span className={s.dot}>{props.from} - {props.to}</span>
                </div>
                <div className={s.postContent}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
type CourcesBlockPropsType = {
    position:string
    companyName: string
    from: number
    to: string
    description: string
}
export const CourcesBlock: React.FC<CourcesBlockPropsType> = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={s.content}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>{props.position}</h4>
                </div>
                <div className={s.postSubtitle}>
                    <span>{props.companyName}</span>
                    <span className={s.dot}>{props.from} - {props.to}</span>
                </div>
                <div className={s.postContent}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

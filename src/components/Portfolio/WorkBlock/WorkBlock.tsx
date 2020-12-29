import React from 'react'
import {WorkType} from '../Portfolio'
import s from '../Portfolio.module.sass'

type WorkBlockType = {
    work: WorkType
}
export const WorkBlock: React.FC<WorkBlockType> = (props) => {

    return (
        <div className={s.work} style={props.work.style} data-aos="zoom-in">
            <div className={s.curtain}>
                <div className={s.details}>
                    <h2>{props.work.title}</h2>
                    <p>{props.work.description}</p>
                    <div>gitHub: <a href={props.work.gitHub} target='_blank'>link</a></div>
                    <div>demo: <a href={props.work.demo} target='_blank'>link</a></div>
                </div>
            </div>
        </div>
    )
}
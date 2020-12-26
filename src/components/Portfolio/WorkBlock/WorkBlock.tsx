import React from 'react'
import { WorkType } from '../Portfolio'
import s from '../Portfolio.module.sass'

type WorkBlockType = {
    work: WorkType
}
export const WorkBlock: React.FC<WorkBlockType> = (props) => {

    return (
        <div className={s.work} style={props.work.style}>
            <div className={s.curtain}>
                <a href={props.work.href}>
                    <div className={s.details}>
                        <h2>{props.work.title}</h2>
                        <p>{props.work.description}<span> somebody</span></p>
                    </div>
                </a>
            </div>
        </div>
    )
}
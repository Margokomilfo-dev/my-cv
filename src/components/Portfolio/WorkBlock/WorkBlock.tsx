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
                    <div>
                        <h2>{props.work.title}</h2>
                        <p>{props.work.description}</p>
                    </div>
                    <div>
                        <div className={s.github}><span> gitHub: </span><a href={props.work.gitHubLink} target='_blank'> {props.work.gitHub} </a></div>
                        <div className={s.demo}><span> demo: </span> <a href={props.work.demoLink} target='_blank'>{props.work.demo}</a></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
import React from 'react'
import '../../common.css'
import s from './MyResume.module.sass'
import {CourcesBlock, EducationBlock, ExperiencesBlock} from './Block'
import styles from '../../common/commonStyles.module.sass'
import {v1} from 'uuid'

type ExperiencesType = { id: string, position: string, companyName: string, from: number, to: string, description: string }
type EducationType = { id: string, companyName: string, specialization: string, faculty: string, from: number, to: string, description: string }
type CourcesType = { id: string, position: string, companyName: string, from: number, to: string, description: string }
type stateType = {
    experiences: Array<ExperiencesType>
    education: Array<EducationType>
    cources: Array<CourcesType>
}
const state: stateType = {
    experiences: [
        { id: v1(), position: 'SENIOR DEVELOPER 1', companyName: 'Company Name', from: 2012, to: 'Current', description: 'Lorem ipsum dolor sit amet, corporis explicabo corporis explicabo maiores minima possimus'},
        { id: v1(), position: 'SENIOR DEVELOPER 1', companyName: 'Company Name', from: 2012, to: 'Current', description: 'Lorem ipsum dolor sit amet, corporis explicabo corporis explicabo maiores minima possimus'},
        { id: v1(), position: 'SENIOR DEVELOPER 1', companyName: 'Company Name', from: 2012, to: 'Current', description: 'Lorem ipsum dolor sit amet, corporis explicabo corporis explicabo maiores minima possimus'},
    ],
    education: [
        { id: v1(), companyName: 'Polotsk State University', faculty: 'faculty of information technologies', specialization: 'Information Technologies Software', from: 2006, to: '2011', description: ''},
        { id: v1(), companyName: 'Polotsk State University', faculty: 'faculty of low', specialization: 'Jurisprudence', from: 2008, to: '2011', description: ''},
    ],
    cources: [
        { id: v1(), position: 'SENIOR DEVELOPER 1', companyName: 'Company Name', from: 2012, to: 'Current', description: 'Lorem ipsum dolor sit amet, corporis explicabo corporis explicabo maiores minima possimus'},
        { id: v1(), position: 'SENIOR DEVELOPER 1', companyName: 'Company Name', from: 2012, to: 'Current', description: 'Lorem ipsum dolor sit amet, corporis explicabo corporis explicabo maiores minima possimus'},
        { id: v1(), position: 'SENIOR DEVELOPER 1', companyName: 'Company Name', from: 2012, to: 'Current', description: 'Lorem ipsum dolor sit amet, corporis explicabo corporis explicabo maiores minima possimus'},
        { id: v1(), position: 'SENIOR DEVELOPER 1', companyName: 'Company Name', from: 2012, to: 'Current', description: 'Lorem ipsum dolor sit amet, corporis explicabo corporis explicabo maiores minima possimus'},
    ]
}
type MyResumePropsType = {}
export const MyResume: React.FC<MyResumePropsType> = (props) => {
    const expElements = state.experiences.map(exp => <ExperiencesBlock key={exp.id} position={exp.position} companyName={exp.companyName} from={exp.from} to={exp.to} description={exp.description}/>)
    const eduElements = state.education.map(edu => <EducationBlock key={edu.id} companyName={edu.companyName} faculty={edu.faculty} specialization={edu.specialization} from={edu.from} to={edu.to} description={edu.description} />)
    const courcesElements = state.cources.map(exp => <CourcesBlock key={exp.id} position={exp.position} companyName={exp.companyName} from={exp.from} to={exp.to} description={exp.description}/>)
    return (
        <div className={styles.blockName} data-aos="fade-in" id='resume'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>My Resume</h2>
                    <span className={styles.border}> </span>
                </div>
                <div className={s.resume}>

                    <div className={s.timeLine}>
                        <Category elements={expElements} title={'experiences'}/>
                        <Category elements={eduElements} title={'education'}/>
                        <Category elements={courcesElements} title={'cources'}/>

                        <div className={s.categoryEndIcon}> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
type CategoryType = {
    title: string
    elements: any
}
export const Category: React.FC<CategoryType> = (props) => {
    return (
        <div>
            <div className={s.category}>
                <span>{props.title}</span>
                <div className={s.categoryIcon}> </div>
            </div>
            <div className={s.contentBlocks}>
                {props.elements}
            </div>
        </div>
    )
}
import React from 'react'
import s from './MyResume.module.sass'
import {CoursesBlock} from './Blocks/CoursesBlock'
import styles from '../../common/commonStyles.module.sass'
import {v1} from 'uuid'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faInfo} from '@fortawesome/free-solid-svg-icons'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'
import {ExperiencesBlock} from './Blocks/ExperiencesBlock'
import {EducationBlock} from './Blocks/EducationBlock'
import {useTranslation} from 'react-i18next'

export type ExperiencesType = { id: string, position: string, companyName: string, from: number | string, to: string, description: string }
export type EducationType = { id: string, companyName: string, specialization: string, faculty: string, from: number | string, to: number | string, description: string }
export type CoursesType = { id: string, position: string, companyName: string, from: number | string, to: string, description: string }
type stateType = {
    experiences: Array<ExperiencesType>
    education: Array<EducationType>
    courses: Array<CoursesType>
}


type MyResumePropsType = {}
export const MyResume: React.FC<MyResumePropsType> = (props) => {
    const {t} = useTranslation()
    const state: stateType = {
        experiences: [
            {
                id: v1(),
                position: t('myResume.experiences.1.position'),
                companyName: t('myResume.experiences.1.companyName'),
                from: '05.2020',
                to: t('to'),
                description: t('myResume.experiences.1.description'),
            },
            {
                id: v1(),
                position: t('myResume.experiences.2.position'),
                companyName: t('myResume.experiences.2.companyName'),
                from: '09.2020',
                to: t('to'),
                description: t('myResume.experiences.2.description'),
            },
            {
                id: v1(),
                position: t('myResume.experiences.3.position'),
                companyName: t('myResume.experiences.3.companyName'),
                from: 2015,
                to: '12.2018',
                description:  t('myResume.experiences.3.description'),
            },
            {
                id: v1(),
                position: t('myResume.experiences.4.position'),
                companyName: t('myResume.experiences.4.companyName'),
                from: 2012,
                to: '2017',
                description: t('myResume.experiences.4.description'),
            },
            {
                id: v1(),
                position: t('myResume.experiences.5.position'),
                companyName: t('myResume.experiences.5.companyName'),
                from: 2010,
                to: '2012',
                description: t('myResume.experiences.5.description'),
            },

        ],
        education: [
            {
                id: v1(),
                companyName: t('PSU') ,
                faculty: t('myResume.education.edu1.faculty'),
                specialization: t('myResume.education.edu1.specialization'),
                from: 2006,
                to: '2011',
                description: ''
            },
            {
                id: v1(),
                companyName: t('PSU') ,
                faculty: t('myResume.education.edu2.faculty'),
                specialization:  t('myResume.education.edu2.specialization'),
                from: 2008,
                to: '2011',
                description: ''
            },
        ],
        courses: [
            {
                id: v1(),
                position: t('myResume.courses.course1.position'),
                companyName: t('onlineCourse'),
                from: '2020',
                to: t('to'),
                description: t('myResume.courses.course1.description')
            },
            {
                id: v1(),
                position: t('myResume.courses.course2.position'),
                companyName: t('onlineCourse'),
                from: '2020',
                to: '-',
                description: t('myResume.courses.course2.description')
            },
            {
                id: v1(),
                position: t('myResume.courses.course3.position'),
                companyName: t('onlineCourse'),
                from: '2019',
                to: '-',
                description: t('myResume.courses.course3.description'),
            },
            {
                id: v1(),
                position: t('myResume.courses.course4.position'),
                companyName: t('onlineCourse'),
                from: '2019',
                to: '-',
                description: t('myResume.courses.course4.description'),
            },
            {
                id: v1(),
                position: t('myResume.courses.course5.position'),
                companyName: t('onlineCourse'),
                from: '2019',
                to: '-',
                description: t('myResume.courses.course5.description'),
            },
            {
                id: v1(),
                position: t('myResume.courses.course6.position'),
                companyName: t('onlineCourse'),
                from: '2016',
                to: '-',
                description: t('myResume.courses.course6.description'),
            },
            {
                id: v1(),
                position: t('myResume.courses.course7.position'),
                companyName: t('myResume.courses.course7.companyName'),
                from: '06.2015',
                to: '10.2015',
                description: t('myResume.courses.course7.description'),
            },
            {
                id: v1(),
                position: t('myResume.courses.course8.position'),
                companyName: t('PSU'),
                from: '09.2012',
                to: '11.2012',
                description: t('myResume.courses.course8.description'),
            },
            {
                id: v1(),
                position: t('myResume.courses.course9.position'),
                companyName: t('PSU'),
                from: '01.2010',
                to: '03.2010',
                description: t('myResume.courses.course9.description'),
            },
            {
                id: v1(),
                position: t('myResume.courses.course10.position'),
                companyName:t('PSU'),
                from: '08.2009',
                to: '10.2009',
                description: t('myResume.courses.course10.description'),
            },
        ]
    }
    const expElements = state.experiences.map(exp => <ExperiencesBlock key={exp.id} exp={exp}/>)
    const eduElements = state.education.map(edu => <EducationBlock key={edu.id} edu={edu}/>)
    const courcesElements = state.courses.map(course => <CoursesBlock key={course.id} course={course}/>)
    return (
        <div className={styles.blockName} data-aos="fade-in" id='resume'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>{t('myResume.title')}</h2>
                    <span className={styles.border}> </span>
                </div>
                <div className={s.resume}>

                    <div className={s.timeLine}>
                        <div className={s.categoryWrapper}>
                            <Category elements={expElements} title={t('myResume.experiences.exp')} icon={faFolderOpen} />
                        </div>
                        <div className={s.categoryWrapper}>
                            <Category elements={eduElements} title={t('myResume.education.edu')} icon={faBook} />
                        </div>

                        <div className={s.categoryWrapper}>
                            <Category elements={courcesElements} title={t('myResume.courses.cour')} icon={faInfo} />
                        </div>

                        <div className={s.categoryEndIcon}>
                            <FontAwesomeIcon icon={faBookmark} className={s.socialLib}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
type CategoryType = {
    title: string
    elements: any
    icon: any
}
export const Category: React.FC<CategoryType> = (props) => {
    return (
        <>
            <div className={s.category}>
                <span>{props.title}</span>

            </div>
            <div className={s.contentBlocks}>
                {props.elements}
                <div className={`${s.folder} ${props.icon === faFolderOpen && s.expFolder} || ${props.icon === faBook &&
                s.eduFolder} || ${props.icon === faInfo && s.courcesFolder}`}>
                    <FontAwesomeIcon icon={props.icon} className={s.socialLib}/>
                </div>
            </div>
        </>
    )
}
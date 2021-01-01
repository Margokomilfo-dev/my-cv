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
export type CourcesType = { id: string, position: string, companyName: string, from: number | string, to: number | string, description: string }
type stateType = {
    experiences: Array<ExperiencesType>
    education: Array<EducationType>
    cources: Array<CourcesType>
}


type MyResumePropsType = {}
export const MyResume: React.FC<MyResumePropsType> = (props) => {
    const {t} = useTranslation()
    const state: stateType = {
        experiences: [
            {
                id: v1(),
                position: t('myResume.1.position'),
                companyName: t('myResume.1.companyName'),
                from: '05.2020',
                to: t('myResume.1.to'),
                description: t('myResume.1.description'),
            },
            {
                id: v1(),
                position: t('myResume.2.position'),
                companyName: t('myResume.2.companyName'),
                from: '09.2020',
                to: t('myResume.2.to'),
                description: t('myResume.2.description'),
            },
            {
                id: v1(),
                position: t('myResume.3.position'),
                companyName: t('myResume.3.companyName'),
                from: 2015,
                to: '12.2018',
                description:  t('myResume.3.description'),
            },
            {
                id: v1(),
                position: t('myResume.4.position'),
                companyName: t('myResume.4.companyName'),
                from: 2012,
                to: '2017',
                description: t('myResume.4.description'),
            },
            {
                id: v1(),
                position: t('myResume.5.position'),
                companyName: t('myResume.5.companyName'),
                from: 2010,
                to: '2012',
                description: t('myResume.5.description'),
            },

        ],
        education: [
            {
                id: v1(),
                companyName: t('myResume.edu1.companyName') ,
                faculty: t('myResume.edu1.faculty'),
                specialization: t('myResume.edu1.specialization'),
                from: 2006,
                to: '2011',
                description: ''
            },
            {
                id: v1(),
                companyName: t('myResume.edu2.companyName') ,
                faculty: t('myResume.edu2.faculty'),
                specialization:  t('myResume.edu2.specialization'),
                from: 2008,
                to: '2011',
                description: ''
            },
        ],
        cources: [
            {
                id: v1(),
                position: 'React for middle',
                companyName: 'Online-course',
                from: '2020',
                to: 'current',
                description: 'TypeScript, Ant Design, Appolo GraphQL, Socket.IO, RestAPI, MaterialUI, vanilla JS,' +
                    ' Angular, node.js.'
            },
            {
                id: v1(),
                position: 'React/Redux',
                companyName: 'Online-course',
                from: '2020',
                to: '-',
                description: 'Props (attributes), functional Components, class Components, state, methods of' +
                    ' lifecycle, create-react-app, bind, Babel, ECMAScript, presentational & containerComponents,' +
                    ' redux-thunk, state vs Redux, HOC, React Hooks, useReducer, useMemo, useCallback, FLAX, npm/yarn.'
            },
            {
                id: v1(),
                position: 'Web-developer 2.0',
                companyName: 'Online-course',
                from: '2019',
                to: '-',
                description: 'HTML5, CSS3 (BEM, SASS, Bootstrap), JavaScript (HTML DOM), Git & GitHub, Libraries jQuery,' +
                    ' React, Redux, Website testing, Animation.'
            },
            {
                id: v1(),
                position: 'Web-developer',
                companyName: 'Online-course',
                from: '2019',
                to: '-',
                description: 'HTML/CSS/Less/Saas, Bootstrap, Javascript, jQuery, WordPress, Responsive web design (RWD).'
            },
            {
                id: v1(),
                position: 'JavaScript + React',
                companyName: 'Online-course',
                from: '2019',
                to: '-',
                description: 'JavaScript in React, jsx, Flux, class Components, Object Life Cycles, connect, building' +
                    ' forms in React - formik library.'
            },
            {
                id: v1(),
                position: 'HTML/CSS + JavaScript',
                companyName: 'Online-course',
                from: '2016',
                to: '-',
                description: 'HTML, css, basic jQuery, basic JavaScript'
            },
            {
                id: v1(),
                position: 'HTML, css, javascript',
                companyName: 'IT-Academy',
                from: '06.2015',
                to: '10.2015',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  architecto debitis error iste natus quis ut voluptatem! Iusto, porro, quia.'
            },
            {
                id: v1(),
                position: 'Pedagogical course',
                companyName: 'Company Name',
                from: '09.2012',
                to: '11.2012',
                description: 'What is education and what types of it we have today? Learn some key point about' +
                    ' development of offline and online education, make a good pedagogical dispositive, how to start your' +
                    ' teaching project, advice and tips for beginning teaching project and improving teaching skills'
            },
            {
                id: v1(),
                position: 'CorelDraw',
                companyName: 'Polotsk State University',
                from: '01.2010',
                to: '03.2010',
                description: 'Create business card and unique color palettes, design clean and professional business' +
                    ' cards,organizing a brochure layout by learning. Learned how to manage pages, also combining' +
                    ' vector shapes, to use them in logos and graphics'
            },
            {
                id: v1(),
                position: 'Photoshop',
                companyName: 'Polotsk State University',
                from: '08.2009',
                to: '10.2009',
                description: 'Business cards, design icons, illustrations and characters, improve and repair' +
                    ' photos, remove people or objects from photos and cut away a person from their background, ' +
                    'use creative effects to design stunning text styles, layers, master selections, working with the layers panel.'
            },
        ]
    }
    const expElements = state.experiences.map(exp => <ExperiencesBlock key={exp.id} exp={exp}/>)
    const eduElements = state.education.map(edu => <EducationBlock key={edu.id} edu={edu}/>)
    const courcesElements = state.cources.map(course => <CoursesBlock key={course.id} course={course}/>)
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
                            <Category elements={expElements} title={t('myResume.experiences')} icon={faFolderOpen} />
                        </div>
                        <div className={s.categoryWrapper}>
                            <Category elements={eduElements} title={'education'} icon={faBook} />
                        </div>

                        <div className={s.categoryWrapper}>
                            <Category elements={courcesElements} title={'cources'} icon={faInfo} />
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
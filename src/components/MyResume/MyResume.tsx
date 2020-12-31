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

export type ExperiencesType = { id: string, position: string, companyName: string, from: number | string, to: number | string, description: string }
export type EducationType = { id: string, companyName: string, specialization: string, faculty: string, from: number | string, to: number | string, description: string }
export type CourcesType = { id: string, position: string, companyName: string, from: number | string, to: number | string, description: string }
type stateType = {
    experiences: Array<ExperiencesType>
    education: Array<EducationType>
    cources: Array<CourcesType>
}
const state: stateType = {
    experiences: [
        {
            id: v1(),
            position: 'Front-end developer',
            companyName: 'freelance',
            from: '05.2020',
            to: 'Current',
            description: 'React development using Redux, React/Redux, axios, MaterialUI libraries. Work with Hooks,' +
                ' TypeScript, creating Rest API. Refactoring, bug fixing, migrating to TypeScript, registration and' +
                ' login form creation, custom components development, jest testing, storybook. JavaScript,' +
                ' TypeScript, React/Redux,RestAPI. '
        },
        {
            id: v1(),
            position: 'Front-end developer',
            companyName: 'IT-incubator (Belarus)',
            from: '09.2020',
            to: 'Current',
            description: 'JavaScript, React/Redux, TypeScript, RestAPI. Writing web-projects, mentoring of students,' +
                ' solving problems with code and fixing of code-bugs.'
        },
        {
            id: v1(),
            position: 'Director',
            companyName: 'Online store "Krasotka-pro" (Belarus)',
            from: 2015,
            to: '12.2018',
            description: 'internet sales, marketing, online support, financial management, problem solving '
        },
        {
            id: v1(),
            position: 'Teacher of programing languages',
            companyName: 'Polotsk State University (Belarus)',
            from: 2012,
            to: 2017,
            description: 'Teaching next subjects: Pascal, Delphi, HTML, CSS, JavaScript, accounting program 1C. I' +
                ' was the main teacher of 30 testimony projects.'
        },
        {
            id: v1(),
            position: 'Front-end developer',
            companyName: 'Felix (Belarus)',
            from: 2010,
            to: 2012,
            description: 'Creating of web-sites & web-design (Photoshop).'
        },

    ],
    education: [
        {
            id: v1(),
            companyName: 'Polotsk State University',
            faculty: 'Information technologies',
            specialization: 'Information Technologies Software',
            from: 2006,
            to: '2011',
            description: ''
        },
        {
            id: v1(),
            companyName: 'Polotsk State University',
            faculty: 'Low',
            specialization: 'Jurisprudence',
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

type MyResumePropsType = {}
export const MyResume: React.FC<MyResumePropsType> = (props) => {
    const expElements = state.experiences.map(exp => <ExperiencesBlock key={exp.id} exp={exp}/>)
    const eduElements = state.education.map(edu => <EducationBlock key={edu.id} edu={edu}/>)
    const courcesElements = state.cources.map(course => <CoursesBlock key={course.id} course={course}/>)
    return (
        <div className={styles.blockName} data-aos="fade-in" id='resume'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>My Resume</h2>
                    <span className={styles.border}> </span>
                </div>
                <div className={s.resume}>

                    <div className={s.timeLine}>
                        <div className={s.categoryWrapper}>
                            <Category elements={expElements} title={'experiences'} icon={faFolderOpen} />
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
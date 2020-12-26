import React, {useState} from 'react'
import s from './Portfolio.module.sass'
import '../../common.css'
import styles from '../../common/commonStyles.module.sass'
import {v1} from 'uuid'
import bg1 from '../../assets/img/1.jpg'
import bg2 from '../../assets/img/2.jpg'
import bg3 from '../../assets/img/3.jpg'
import bg4 from '../../assets/img/4.jpg'
import bg5 from '../../assets/img/5.jpg'
import bg6 from '../../assets/img/6.jpg'
import {WorkBlock} from './WorkBlock/WorkBlock'

export type WorkType = { id: string, style: any, title: string, description: string, part:FilterType , href: string}
type FilterType = 'all' | 'js' | 'html-css' | 'html-css-js' | 'react-redux' | 'react' | 'small-tasks'

const social = {backgroundImage: `url(${bg1})`}
const todo = {backgroundImage: `url(${bg2})`}
const project = {backgroundImage: `url(${bg3})`}
const project1 = {backgroundImage: `url(${bg4})`}
const project2 = {backgroundImage: `url(${bg5})`}
const project3 = {backgroundImage: `url(${bg6})`}

const initialState = [
        {id: v1(), style: social, title: 'Social Network JavaScript', description: 'react-redux', part: 'react-redux', href: '#'},
        {id: v1(), style: todo, title: 'Todolist', description: 'react-redux', part: 'react-redux', href: '#'},
        {id: v1(), style: project, title: 'Counter', description: 'react-redux', part: 'react-redux', href: '#'},
        {id: v1(), style: project1, title: 'CRM', description: 'js', part: 'js', href: '#'},
        {id: v1(), style: social, title: 'Lending', description: 'html-css-js', part: 'html-css-js', href: '#'},
        {id: v1(), style: project2, title: 'Lending', description: 'html-css-js', part: 'html-css-js', href: '#'},
        {id: v1(), style: project, title: 'Counter', description: 'react-redux', part: 'react-redux', href: '#'},
        {id: v1(), style: project3, title: 'CRM', description: 'react', part: 'react', href: '#'},
        {id: v1(), style: project, title: 'Lending', description: 'small-tasks', part: 'small-tasks', href: '#'},
        {id: v1(), style: todo, title: 'Lending', description: 'js', part: 'js', href: '#'},
        {id: v1(), style: project1, title: 'Counter', description: 'html-css', part: 'html-css', href: '#'},
    ] as Array<WorkType>


export const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<FilterType>("all")
    const [active, setActive] = useState<Array<boolean>>([true, false, false, false, false, false, false])

    const filterWorks = (works: Array<WorkType>, filter: FilterType): Array<WorkType> => {
        if (filter === 'all') return works
        if (filter === 'js') return works.filter(w => w.part === 'js' || w.part === 'html-css-js' )
        if (filter === 'html-css') return works.filter(w => w.part === 'html-css')
        if (filter === 'html-css-js') return works.filter(w => w.part === 'html-css-js')
        if (filter === 'react') return works.filter(w => w.part ===  'react')
        if (filter === 'react-redux') return works.filter(w => w.part ===  'react-redux')
        if (filter === 'small-tasks') return works.filter(w => w.part === 'small-tasks')
        return works
    }
    const filteredWorks = filterWorks(initialState, filter)

    const allWorksClick = () => {
        setActive([true, false, false, false, false, false, false])
        setFilter('all')
    }
    const javaScriptClick = () => {
        setActive([false, true, false, false, false, false, false])
        setFilter('js')
    }
    const htmlCssClick = () => {
        setActive([false, false, true, false, false, false, false])
        setFilter('html-css')
    }
    const htmlCssJsClick = () => {
        setActive([false, false, false, true, false, false, false])
        setFilter('html-css-js')
    }
    const reactClick = () => {
        setActive([false, false, false, false, true, false, false])
        setFilter('react')
    }
    const reactReduxClick = () => {
        setActive([false, false, false, false, false, true, false])
        setFilter('react-redux')
    }
    const smallTasksClick = () => {
        setActive([false, false, false, false, false, false, true])
        setFilter('small-tasks')
    }

    return (
        <div className={styles.blockName} data-aos="fade-in" id='works'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>Portfolio</h2>
                    <span className={styles.border}> </span>
                </div>
                <div className={s.menu}>
                    <ul>
                        <li onClick={allWorksClick} className={active[0] ? s.active : ''}>All works</li>
                        <li onClick={javaScriptClick} className={active[1] ? s.active : ''}>JavaScript</li>
                        <li onClick={htmlCssClick} className={active[2]? s.active : ''}>HTML/CSS</li>
                        <li onClick={htmlCssJsClick} className={active[3]? s.active : ''}> HTML/CSS/JS</li>
                        <li onClick={reactClick} className={active[4] ? s.active : ''}>React </li>
                        <li onClick={reactReduxClick} className={active[5] ? s.active : ''}>React/Redux</li>
                        <li onClick={smallTasksClick} className={active[6] ? s.active : ''}>small tasks</li>
                    </ul>
                </div>

                <div className={s.portfolioContainer}>
                    {filteredWorks.map(w => <WorkBlock work={w} />)}
                </div>
            </div>
        </div>
    )
}


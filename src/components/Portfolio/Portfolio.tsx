import React, {useState} from 'react'
import s from './Portfolio.module.sass'
import '../../common.css'
import styles from '../../common/commonStyles.module.sass'
import {v1} from 'uuid'
import bg1 from '../../assets/img/1.jpg'
import bg2 from '../../assets/img/2.jpg'
import bg3 from '../../assets/img/3.jpg'
import {WorkBlock} from './WorkBlock/WorkBlock'

export type WorkType = { id: string, style: any, title: string, description: string, part:FilterType , href: string}
type FilterType = 'all' | 'js' | 'html-css' | 'html-css-js' | 'react-redux' | 'react' | 'small-tasks'


const social = {backgroundImage: `url(${bg1})`}
const todo = {backgroundImage: `url(${bg2})`}
const project = {backgroundImage: `url(${bg3})`}

const initialState = [
        {id: v1(), style: social, title: 'Social Network JavaScript', description: 'developed for somebody', part: 'react-redux', href: '#'},
        {id: v1(), style: todo, title: 'Todolist', description: 'developed for somebody', part: 'react-redux', href: '#'},
        {id: v1(), style: project, title: 'Counter', description: 'developed for somebody', part: 'react-redux', href: '#'},
        {id: v1(), style: project, title: 'CRM', description: 'developed for somebody', part: 'js', href: '#'},
        {id: v1(), style: todo, title: 'Lending', description: 'developed for somebody', part: 'html-css-js', href: '#'},
        {id: v1(), style: todo, title: 'Lending', description: 'developed for somebody', part: 'html-css-js', href: '#'},
        {id: v1(), style: project, title: 'Counter', description: 'developed for somebody', part: 'react-redux', href: '#'},
        {id: v1(), style: project, title: 'CRM', description: 'developed for somebody', part: 'react', href: '#'},
        {id: v1(), style: todo, title: 'Lending', description: 'developed for somebody', part: 'small-tasks', href: '#'},
        {id: v1(), style: todo, title: 'Lending', description: 'developed for somebody', part: 'js', href: '#'},
        {id: v1(), style: project, title: 'Counter', description: 'developed for somebody', part: 'html-css', href: '#'},
    ] as Array<WorkType>

type PortfolioPropsType = {}

export const Portfolio: React.FC<PortfolioPropsType> = (props) => {
    const [state, setState] = useState<Array<WorkType>>(initialState)
    const sortWorks = (state: Array<WorkType>, filter: FilterType): Array<WorkType> => {
        if (filter === 'all') return state.filter(w => w.part === 'js' || w.part === 'html-css-js' || w.part ===  'react-redux' || w.part === 'small-tasks')
        if (filter === 'js') return state.filter(w => w.part === 'js' || w.part === 'html-css-js' )
        if (filter === 'html-css') return state.filter(w => w.part === 'html-css')
        if (filter === 'html-css-js') return state.filter(w => w.part === 'html-css-js')
        if (filter === 'react') return state.filter(w => w.part ===  'react')
        if (filter === 'react-redux') return state.filter(w => w.part ===  'react-redux')
        if (filter === 'small-tasks') return state.filter(w => w.part === 'small-tasks')
        return state
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
                        <li onClick={() => setState(sortWorks(initialState, 'all'))}>All works</li>
                        <li onClick={() => setState(sortWorks(initialState, 'js'))}>JavaScript</li>
                        <li onClick={() => setState(sortWorks(initialState, 'html-css'))}>HTML/CSS</li>
                        <li onClick={() => setState(sortWorks(initialState, 'html-css-js'))}> HTML/CSS/JS</li>
                        <li onClick={() => setState(sortWorks(initialState, 'react'))}>React </li>
                        <li onClick={() => setState(sortWorks(initialState, 'react-redux'))}>React/Redux</li>
                        <li onClick={() => setState(sortWorks(initialState, 'small-tasks'))}>small tasks</li>
                    </ul>
                </div>

                <div className={s.portfolioContainer}>
                    {state.map(w => <WorkBlock work={w} />)}
                </div>
            </div>
        </div>
    )
}


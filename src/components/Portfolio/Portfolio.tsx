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
    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)
    const [active7, setActive7] = useState(false)

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

    const allWorksClick = () => {
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        setActive6(false)
        setActive7(false)
        setState(sortWorks(initialState, 'all'))

        setActive1(true)
    }
    const javaScriptClick = () => {
        setActive1(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        setActive6(false)
        setActive7(false)
        setState(sortWorks(initialState, 'html-css'))
        setActive2(true)
    }
    const htmlCssClick = () => {
        setActive1(false)
        setActive2(false)
        setActive4(false)
        setActive5(false)
        setActive6(false)
        setActive7(false)
        setState(sortWorks(initialState, 'js'))
        setActive3(true)
    }
    const htmlCssJsClick = () => {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive5(false)
        setActive6(false)
        setActive7(false)
        setState(sortWorks(initialState, 'html-css-js'))
        setActive4(true)
    }
    const reactClick = () => {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive6(false)
        setActive7(false)
        setState(sortWorks(initialState, 'react'))
        setActive5(true)
    }
    const reactReduxClick = () => {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        setActive7(false)
        setState(sortWorks(initialState, 'react-redux'))
        setActive6(true)
    }
    const smallTasksClick = () => {
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
        setActive6(false)
        setState(sortWorks(initialState, 'small-tasks'))
        setActive7(true)
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
                        <li onClick={allWorksClick} className={active1 ? s.active : ''}>All works</li>
                        <li onClick={javaScriptClick} className={active2 ? s.active : ''}>JavaScript</li>
                        <li onClick={htmlCssClick} className={active3 ? s.active : ''}>HTML/CSS</li>
                        <li onClick={htmlCssJsClick} className={active4 ? s.active : ''}> HTML/CSS/JS</li>
                        <li onClick={reactClick} className={active5 ? s.active : ''}>React </li>
                        <li onClick={reactReduxClick} className={active6 ? s.active : ''}>React/Redux</li>
                        <li onClick={smallTasksClick} className={active7 ? s.active : ''}>small tasks</li>
                    </ul>
                </div>

                <div className={s.portfolioContainer}>
                    {state.map(w => <WorkBlock work={w} />)}
                </div>
            </div>
        </div>
    )
}


import React, {useState} from 'react'
import s from './Portfolio.module.sass'
import styles from '../../common/commonStyles.module.sass'
import {v1} from 'uuid'
import threeM from '../../assets/img/portfolio/3M.png'
import todolist from '../../assets/img/portfolio/todo.png'
import job from '../../assets/img/portfolio/job.png'
import counterTue1 from '../../assets/img/portfolio/countertuesday.png'
import counterTue2 from '../../assets/img/portfolio/counter2.png'
import ignat from '../../assets/img/portfolio/ignat.png'
import trafficLight from '../../assets/img/portfolio/traffic.png'
import wordpressCss from '../../assets/img/portfolio/wordpress.png'
import uberLending from '../../assets/img/portfolio/uber.png'
import pulsik from '../../assets/img/portfolio/puls.png'
import globalopt from '../../assets/img/portfolio/global.png'
import currencyConv from '../../assets/img/portfolio/currancy.png'
import calc from '../../assets/img/portfolio/calc.png'
import moneyKeeper from '../../assets/img/portfolio/moneyKeeper.png'
import tabulation from '../../assets/img/portfolio/tabs.png'
import timer1 from '../../assets/img/portfolio/timer.png'
import timer2 from '../../assets/img/portfolio/timer2.jpg'
import popup_ from '../../assets/img/portfolio/popup.png'
import {WorkBlock} from './WorkBlock/WorkBlock'

export type WorkType = { id: string, style: any, title: string, description: string, part: FilterType, gitHub: string, gitHubLink: string, demo: string, demoLink: string }
type FilterType = 'all' | 'js' | 'html-css' | 'html-css-js' | 'react-redux' | 'react'

const socialJS = {backgroundImage: `url(${threeM})`}
const socialTS = {backgroundImage: `url(${job})`}
const todo = {backgroundImage: `url(${todolist})`}
const counter1 = {backgroundImage: `url(${counterTue1})`}
const counter2 = {backgroundImage: `url(${counterTue2})`}
const fromIgnat = {backgroundImage: `url(${ignat})`}
const traffic = {backgroundImage: `url(${trafficLight})`}
const wordpress = {backgroundImage: `url(${wordpressCss})`}
const uber = {backgroundImage: `url(${uberLending})`}
const puls = {backgroundImage: `url(${pulsik})`}
const global = {backgroundImage: `url(${globalopt})`}
const currency = {backgroundImage: `url(${currencyConv})`}
const calculator = {backgroundImage: `url(${calc})`}
const keeper = {backgroundImage: `url(${moneyKeeper})`}
const tabs = {backgroundImage: `url(${tabulation})`}
const timer = {backgroundImage: `url(${timer1})`}
const timer_ = {backgroundImage: `url(${timer2})`}
const popup = {backgroundImage: `url(${popup_})`}

const initialState: Array<WorkType> = [
    {
        id: v1(),
        style: socialJS,
        title: 'TriMSocial',
        description: 'React, Redux, JavaScript, RestAPI, HTML/CSS, ' +
            'functional and classes components, hooks, connect, HOC',
        part: 'react-redux',
        gitHubLink: 'https://github.com/Margokomilfo-dev/TriMsocial-REACT',
        gitHub: 'margokomilfo-dev/TriMsocial-REACT/',
        demoLink: 'https://margokomilfo-dev.github.io/TriMsocial-REACT/',
        demo: 'margokomilfo-dev.github.io/TriMsocial-REACT/'
    },
    {
        id: v1(), style: global, title: 'GlobalOpt', description: 'HTML/SASS, JavaScript', part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/GlobalOpt-HTML-SASS-JS',
        gitHub: 'margokomilfo-dev/GlobalOpt-HTML-SASS-JS/',
        demoLink: 'https://margokomilfo-dev.github.io/GlobalOpt-HTML-SASS-JS/',
        demo: 'margokomilfo-dev.github.io/GlobalOpt/',
    },
    {
        id: v1(),
        style: counter1,
        title: 'Counter',
        description: 'React, Redux, TypeScript, LocalStorage, HTML/CSS, hooks, functional components, JavaScript ',
        part: 'react-redux',
        gitHubLink: 'https://github.com/Margokomilfo-dev/exam-tuesday',
        gitHub: 'margokomilfo-dev/exam-tuesday/',
        demoLink: 'https://margokomilfo-dev.github.io/exam-tuesday/',
        demo: 'margokomilfo-dev.github.io/counter/',
    },
    {
        id: v1(),
        style: wordpress,
        title: 'Wordpress',
        description: 'HTML/CSS',
        part: 'html-css',
        gitHubLink: 'https://github.com/Margokomilfo-dev/WordPress-HTML-CSS',
        gitHub: 'margokomilfo-dev/WordPress-HTML-CSS/',
        demoLink: 'https://margokomilfo-dev.github.io/WordPress-HTML-CSS/',
        demo: 'margokomilfo-dev.github.io/WordPress/',
    },
    {
        id: v1(),
        style: fromIgnat,
        title: 'Tasks',
        description: 'React, JavaScript, TypeScript, Redux, HTML/CSS',
        part: 'react',
        gitHubLink: 'https://github.com/Margokomilfo-dev/tasks_from_Ignat',
        gitHub: 'margokomilfo-dev/tasks_from_Ignat/',
        demoLink: 'http://Margokomilfo-dev.github.io/tasks_from_Ignat',
        demo: 'margokomilfo-dev.github.io/tasks/',
    },
    {
        id: v1(),
        style: traffic,
        title: 'Traffic light',
        description: 'JavaScript, HTML/CSS',
        part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/traffic-light',
        gitHub: 'margokomilfo-dev/traffic-light/',
        demoLink: 'https://margokomilfo-dev.github.io/traffic-light/',
        demo: 'margokomilfo-dev.github.io/traffic-light/',
    },
    {
        id: v1(),
        style: counter2,
        title: 'Counter',
        description: 'React, Redux, TypeScript, LocalStorage, HTML/CSS, hooks, functional components, JavaScript ',
        part: 'react-redux',
        gitHubLink: 'https://github.com/Margokomilfo-dev/exam-tuesday-next',
        gitHub: 'margokomilfo-dev/exam-tuesday-next/',
        demoLink: 'https://margokomilfo-dev.github.io/exam-tuesday-next/',
        demo: 'margokomilfo-dev.github.io/counter2/',
    },
    {
        id: v1(),
        style: uber,
        title: 'Uber',
        description: 'HTML/CSS',
        part: 'html-css',
        gitHubLink: 'https://github.com/Margokomilfo-dev/Uber-HTML-CSS',
        gitHub: 'margokomilfo-dev/Uber-HTML-CSS/',
        demoLink: 'https://margokomilfo-dev.github.io/Uber-HTML-CSS/',
        demo: 'margokomilfo-dev.github.io/Uber/',
    },
    {
        id: v1(),
        style: socialTS,
        title: 'SocialWorkNetwork',
        description: 'React, Redux, TypeScript, JavaScript, RestAPI, HTML/CSS, functional components, final-form,' +
            ' HTML/CSS',
        part: 'react-redux',
        gitHubLink: 'https://github.com/Margokomilfo-dev/it-incubator-socialnetwork',
        gitHub: 'margokomilfo-dev/it-incubator-socialnetwork/',
        demoLink: 'https://margokomilfo-dev.github.io/it-incubator-socialnetwork/',
        demo: 'margokomilfo-dev.github.io/socialnetwork/',
    },
    {
        id: v1(),
        style: puls,
        title: 'Puls',
        description: 'JavaScript, HTML/Sass',
        part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/Puls-HTML-SASS-JS',
        gitHub: 'margokomilfo-dev/Puls-HTML-SASS-JS/',
        demoLink: 'https://margokomilfo-dev.github.io/Puls-HTML-SASS-JS/',
        demo: 'margokomilfo-dev.github.io/Puls/',
    },
    {
        id: v1(), style: todo, title: 'Todolist', description: 'React, Redux, JavaScript, TDD (Jest, Snapshot' +
            ' testing, Storybook, RestAPI, MaterialUI, HTML/CSS, functional components, hooks',
        part: 'react-redux',
        gitHubLink: 'https://github.com/Margokomilfo-dev/it-incubator-todolist',
        gitHub: 'margokomilfo-dev/it-incubator-todolist/',
        demoLink: 'https://margokomilfo-dev.github.io/it-incubator-todolist/',
        demo: 'margokomilfo-dev.github.io/todolist/'
    },
    {
        id: v1(), style: currency, title: 'Currency', description: 'JavaScript, JSON, ajax', part: 'js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/converter-zl-usd-euro-json-local--ajax',
        gitHub: 'margokomilfo-dev/converter-zl-usd-euro/',
        demoLink: '',
        demo: '-',
    },
    {
        id: v1(), style: calculator, title: 'Currency', description: 'JavaScript, JSON, ajax, HTML/CSS', part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/REACT-calculators',
        gitHub: 'margokomilfo-dev/REACT-calculators/',
        demoLink: '',
        demo: '-',
    },
    {
        id: v1(), style: keeper, title: 'Money Keeper', description: 'JavaScript, HTML/Sass', part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/money-keeper',
        gitHub: 'margokomilfo-dev/money-keeper/',
        demoLink: '',
        demo: '-',
    },
    {
        id: v1(), style: tabs, title: 'Tabulation', description: 'JavaScript, HTML/CSS', part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/money-keeper',
        gitHub: 'margokomilfo-dev/money-keeper/',
        demoLink: '',
        demo: '-',
    },
    {
        id: v1(), style: timer, title: 'Timer', description: 'JavaScript, HTML/CSS', part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/timer1',
        gitHub: 'margokomilfo-dev/timer/',
        demoLink: '',
        demo: '-',
    },
    {
        id: v1(), style: timer_, title: 'Timer', description: 'JavaScript, HTML/CSS', part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/timer2',
        gitHub: 'margokomilfo-dev/timer2',
        demoLink: '',
        demo: '-',
    },
    {
        id: v1(), style: popup, title: 'Popup', description: 'JavaScript, HTML/CSS', part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/popup',
        gitHub: 'margokomilfo-dev/popup',
        demoLink: '',
        demo: '-',
    },
]


export const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<FilterType>('all')
    const [active, setActive] = useState<Array<boolean>>([true, false, false, false, false, false])

    const filterWorks = (works: Array<WorkType>, filter: FilterType): Array<WorkType> => {
        if (filter === 'all') return works
        if (filter === 'js') return works.filter(w => w.part === 'js' || w.part === 'html-css-js')
        if (filter === 'html-css') return works.filter(w => w.part === 'html-css')
        if (filter === 'html-css-js') return works.filter(w => w.part === 'html-css-js')
        if (filter === 'react') return works.filter(w => w.part === 'react')
        if (filter === 'react-redux') return works.filter(w => w.part === 'react-redux')
        return works
    }
    const filteredWorks = filterWorks(initialState, filter)

    const allWorksClick = () => {
        setActive([true, false, false, false, false, false])
        setFilter('all')
    }
    const javaScriptClick = () => {
        setActive([false, true, false, false, false, false])
        setFilter('js')
    }
    const htmlCssClick = () => {
        setActive([false, false, true, false, false, false])
        setFilter('html-css')
    }
    const htmlCssJsClick = () => {
        setActive([false, false, false, true, false, false])
        setFilter('html-css-js')
    }
    const reactClick = () => {
        setActive([false, false, false, false, true, false])
        setFilter('react')
    }
    const reactReduxClick = () => {
        setActive([false, false, false, false, false, true])
        setFilter('react-redux')
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
                        <li onClick={htmlCssClick} className={active[2] ? s.active : ''}>HTML/CSS</li>
                        <li onClick={htmlCssJsClick} className={active[3] ? s.active : ''}> HTML/CSS/JS</li>
                        <li onClick={reactClick} className={active[4] ? s.active : ''}>React</li>
                        <li onClick={reactReduxClick} className={active[5] ? s.active : ''}>React/Redux</li>
                    </ul>
                </div>

                <div className={s.portfolioContainer}>
                    {filteredWorks.map(w => <WorkBlock work={w} key={w.id}/>)}
                </div>
            </div>
        </div>
    )
}


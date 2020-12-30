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
import bg1 from '../../assets/img/1.jpg'
import bg2 from '../../assets/img/2.jpg'
import bg3 from '../../assets/img/5.jpg'
import bg4 from '../../assets/img/6.jpg'
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
const project1 = {backgroundImage: `url(${bg1})`}
const project2 = {backgroundImage: `url(${bg2})`}
const project3 = {backgroundImage: `url(${bg3})`}
const project4 = {backgroundImage: `url(${bg4})`}

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
        demo: 'margokomilfo-dev.github.io/GlobalOpt-HTML-SASS-JS/',
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
        demo: 'margokomilfo-dev.github.io/exam-tuesday/',
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
        demo: 'margokomilfo-dev.github.io/WordPress-HTML-CSS/',
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
        demo: 'margokomilfo-dev.github.io/tasks_from_Ignat/',
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
        demo: 'margokomilfo-dev.github.io/exam-tuesday-next/',
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
        demo: 'margokomilfo-dev.github.io/Uber-HTML-CSS/',
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
        demo: 'margokomilfo-dev.github.io/it-incubator-socialnetwork/',
    },
    {
        id: v1(),
        style: puls,
        title: 'Puls',
        description: 'JavaScript, HTML/CSS',
        part: 'html-css-js',
        gitHubLink: 'https://github.com/Margokomilfo-dev/Puls-HTML-SASS-JS',
        gitHub: 'margokomilfo-dev/Puls-HTML-SASS-JS/',
        demoLink: 'https://margokomilfo-dev.github.io/Puls-HTML-SASS-JS/',
        demo: 'margokomilfo-dev.github.io/Puls-HTML-SASS-JS/',
    },
    {
        id: v1(), style: todo, title: 'Todolist', description: 'React, Redux, JavaScript, TDD (Jest, Snapshot' +
            ' testing, Storybook, RestAPI, MaterialUI, HTML/CSS, functional components, hooks',
        part: 'react-redux',
        gitHubLink: 'https://github.com/Margokomilfo-dev/it-incubator-todolist',
        gitHub: 'margokomilfo-dev/it-incubator-todolist/',
        demoLink: 'https://margokomilfo-dev.github.io/it-incubator-todolist/',
        demo: 'margokomilfo-dev.github.io/it-incubator-todolist/'
    },
    {
        id: v1(), style: project3, title: 'Counter', description: 'html-css', part: 'html-css', gitHubLink: '#',
        gitHub: '#',
        demoLink: '#',
        demo: '#',
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
                    {filteredWorks.map(w => <WorkBlock work={w}/>)}
                </div>
            </div>
        </div>
    )
}


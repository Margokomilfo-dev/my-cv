import React from 'react'
import './App.css'
import {AboutMe} from './components/AboutMe/AboutMe'
import {Header} from './components/Header/Header'
import {Portfolio} from './components/Portfolio/Portfolio'
import {ContactMe} from './components/ContactMe/ContactMe'
import {Skills} from './components/Skill/Skills'
import {MyResume} from './components/MyResume/MyResume'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Insertion} from './components/Insertion/Insertion'
import {Footer} from './components/Footer/Footer'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import {useTranslation} from 'react-i18next'

AOS.init()

function App() {
    const {t} = useTranslation()
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <MyResume/>
            <Insertion title={t('insertion.1')}/>
            <Portfolio/>
            <Skills/>
            <Insertion title={t('insertion.2')}/>
            <ContactMe/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

export default App

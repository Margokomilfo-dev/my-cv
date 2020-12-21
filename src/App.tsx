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

AOS.init()

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <MyResume/>
            <Portfolio/>
            <Skills/>
            <ContactMe/>
        </div>
    )
}

export default App

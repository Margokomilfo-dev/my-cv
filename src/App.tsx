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

AOS.init()

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <MyResume/>
            <Insertion title={'I Love To Design & Develop'}/>
            <Portfolio/>
            <Skills/>
            <Insertion title={`I'm Open To Work`}/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default App

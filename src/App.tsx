import React from 'react';
import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Header } from './components/Header/Header';
import {MyResume} from "./components/MyResume/MyResume";

function App() {
  return (
    <div className="App">
        <Header/>
        <AboutMe/>
        <MyResume/>
    </div>
  );
}

export default App;

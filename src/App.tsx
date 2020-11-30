import React from 'react';
import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <AboutMe/>
    </div>
  );
}

export default App;

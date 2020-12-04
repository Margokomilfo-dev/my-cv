import React from "react"
import s from './Skills.module.css'

type SkillPropsType = {}

export const Skills: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.title}>
                    <h2>Skills</h2>
                    <span className={s.border}> </span>
                </div>
                <div className={s.skillsContainer}>

                    <div className={s.skill}>
                        <div><img src="" alt="skill" className={s.skillImg}/> </div>
                        <div className={s.skillContent}>
                            <h3>HTML/CSS</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima
                                natus praesentium provident quisquam vel vero, voluptas. Minus?</p>
                        </div>
                    </div>

                    <div className={s.skill}>
                        <div><img src="" alt="skill" className={s.skillImg}/> </div>
                        <div className={s.skillContent}>
                            <h3>HTML/CSS</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima
                                natus praesentium provident quisquam vel vero, voluptas. Minus?</p>
                        </div>
                    </div>


                    <div className={s.skill}>
                        <div><img src="" alt="skill" className={s.skillImg}/> </div>
                        <div className={s.skillContent}>
                            <h3>JavaScript</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima
                                natus praesentium provident quisquam vel vero, voluptas. Minus?</p>
                        </div>
                    </div>

                    <div className={s.skill}>
                        <div><img src="" alt="skill" className={s.skillImg}/> </div>
                        <div className={s.skillContent}>
                            <h3>React</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima
                                natus praesentium provident quisquam vel vero, voluptas. Minus?</p>
                        </div>
                    </div>


                    <div className={s.skill}>
                        <div><img src="" alt="skill" className={s.skillImg}/> </div>
                        <div className={s.skillContent}>
                            <h3>Redux</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima
                                natus praesentium provident quisquam vel vero, voluptas. Minus?</p>
                        </div>
                    </div>

                    <div className={s.skill}>
                        <div><img src="" alt="skill" className={s.skillImg}/> </div>
                        <div className={s.skillContent}>
                            <h3>Redux</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima
                                natus praesentium provident quisquam vel vero, voluptas. Minus?</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
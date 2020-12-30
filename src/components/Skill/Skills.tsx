import React from 'react'
import s from './Skills.module.css'
import styles from '../../common/commonStyles.module.sass'

type SkillPropsType = {}

export const Skills: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={styles.blockName} data-aos="fade-in" id='skills'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>Skills</h2>
                    <span className={styles.border}> </span>
                </div>
                <div className={s.skillsContainer}>

                    {/*------------*/}
                    <SkillBox style={{width: '75%'}} title='React'/>
                    <SkillBox style={{width: '75%'}} title='TypeScript'/>
                    <SkillBox style={{width: '75%'}} title='Redux'/>
                    <SkillBox style={{width: '75%'}} title='Axios'/>
                    <SkillBox style={{width: '75%'}} title='REST API'/>
                    <SkillBox style={{width: '65%'}} title='JavaScript'/>
                    <SkillBox style={{width: '65%'}} title='Material-UI'/>
                    <SkillBox style={{width: '65%'}} title='ReduxToolkit'/>
                    <SkillBox style={{width: '75%'}} title='Flux'/>
                    <SkillBox style={{width: '70%'}} title='Storybook'/>
                    <SkillBox style={{width: '70%'}} title='TDD - Jest'/>
                    <SkillBox style={{width: '70%'}} title='HTML & CSS (Sass/Less/SCSS)'/>
                    {/*-------------*/}

                    {/*<div className={s.skill}>*/}
                    {/*    <div><img src="" alt="skill" className={s.skillImg}/> </div>*/}
                    {/*    <div className={s.skillContent}>*/}
                    {/*        <h3>HTML/CSS</h3>*/}
                    {/*        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima*/}
                    {/*            natus praesentium provident quisquam vel vero, voluptas. Minus?</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={s.skill}>*/}
                    {/*    <div><img src="" alt="skill" className={s.skillImg}/> </div>*/}
                    {/*    <div className={s.skillContent}>*/}
                    {/*        <h3>HTML/CSS</h3>*/}
                    {/*        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima*/}
                    {/*            natus praesentium provident quisquam vel vero, voluptas. Minus?</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={s.skill}>*/}
                    {/*    <div><img src="" alt="skill" className={s.skillImg}/> </div>*/}
                    {/*    <div className={s.skillContent}>*/}
                    {/*        <h3>JavaScript</h3>*/}
                    {/*        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima*/}
                    {/*            natus praesentium provident quisquam vel vero, voluptas. Minus?</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={s.skill}>*/}
                    {/*    <div><img src="" alt="skill" className={s.skillImg}/> </div>*/}
                    {/*    <div className={s.skillContent}>*/}
                    {/*        <h3>React</h3>*/}
                    {/*        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima*/}
                    {/*            natus praesentium provident quisquam vel vero, voluptas. Minus?</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={s.skill}>*/}
                    {/*    <div><img src="" alt="skill" className={s.skillImg}/> </div>*/}
                    {/*    <div className={s.skillContent}>*/}
                    {/*        <h3>Redux</h3>*/}
                    {/*        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima*/}
                    {/*            natus praesentium provident quisquam vel vero, voluptas. Minus?</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={s.skill}>*/}
                    {/*    <div><img src="" alt="skill" className={s.skillImg}/> </div>*/}
                    {/*    <div className={s.skillContent}>*/}
                    {/*        <h3>Redux</h3>*/}
                    {/*        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda est minima*/}
                    {/*            natus praesentium provident quisquam vel vero, voluptas. Minus?</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    )
}

type SkillBoxPropsType = {
    style: {width: string}
    title: string
}
export const SkillBox: React.FC<SkillBoxPropsType> = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skillContent}>
                <h3>{props.title}</h3>
            </div>
            <div className={s.lineWrapper}>
                <div className={s.line}>
                    <div className={s.percentLine} style={props.style}> </div>
                </div>
            </div>
        </div>
    )
}
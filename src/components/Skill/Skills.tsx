import React from 'react'
import s from './Skills.module.sass'
import styles from '../../common/commonStyles.module.sass'
import {useTranslation} from 'react-i18next'

type SkillPropsType = {}

export const Skills: React.FC<SkillPropsType> = (props) => {
    const {t} = useTranslation()
    return (
        <div className={styles.blockName} data-aos="fade-in" id='skills'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>{t('skills.title')}</h2>
                    <span className={styles.border}> </span>
                </div>
                <div className={s.skillsContainer}>
                    <SkillBox style={{width: '75%'}} title='React'/>
                    <SkillBox style={{width: '75%'}} title='Next.js'/>
                    <SkillBox style={{width: '65%'}} title='JavaScript'/>
                    <SkillBox style={{width: '75%'}} title='TypeScript'/>
                    <SkillBox style={{width: '75%'}} title='Redux'/>
                    <SkillBox style={{width: '75%'}} title='Axios'/>
                    <SkillBox style={{width: '75%'}} title='REST API'/>
                    <SkillBox style={{width: '65%'}} title='Material-UI'/>
                    <SkillBox style={{width: '50%'}} title='Ant Design'/>
                    {/*<SkillBox style={{width: '75%'}} title='Flux'/>*/}
                    <SkillBox style={{width: '70%'}} title='Storybook'/>
                    <SkillBox style={{width: '70%'}} title='TDD - Jest'/>
                    <SkillBox style={{width: '70%'}} title='HTML & CSS (Sass/Less/SCSS)'/>
                    <SkillBox style={{width: '80%'}} title='styled-components'/>
                    <SkillBox style={{width: '50%'}} title='Redux Toolkit'/>
                    <SkillBox style={{width: '60%'}} title='Photoshop'/>
                    <SkillBox style={{width: '60%'}} title='CorelDraw'/>
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
        <div className={s.skill} data-aos="fade-in">
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
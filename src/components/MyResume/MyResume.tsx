import React from "react"
import '../../common.css'
import s from './MyResume.module.css'
import {Block} from "./Block";

type MyResumePropsType = {}

export const MyResume: React.FC<MyResumePropsType> = (props) => {
    return (
        <div className='blockName'>
            <div className='container'>
                <div className='blockTitle'>
                    <h2>My Resume</h2>
                    <span className='border'> </span>
                </div>
                <div className={s.resume}>

                    <div className={s.timeLine}>

                        <div className={s.category}>
                                <span>Experiences</span>
                                <div className={s.categoryIcon}> </div>
                        </div>

                        <div className={s.contentBlocks}>
                           <Block/>
                           <Block/>
                           <Block/>
                           <Block/>
                        </div>

                        <div className={s.category}>
                            <span>Education</span>
                            <div className={s.categoryIcon}> </div>
                        </div>

                        <div className={s.contentBlocks}>
                            <Block/>
                            <Block/>
                            <Block/>
                            <Block/>
                        </div>

                        <div className={s.categoryEndIcon}> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

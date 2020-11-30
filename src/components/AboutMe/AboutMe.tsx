import React from "react"
import s from './AboutMe.module.css'
import {PersonalDataLeftPart} from "./PersonalDataLeftPart";
import {HobbiesRightPart} from "./HobbiesRightPart";

type AboutMePropsType = {}
export const AboutMe: React.FC<AboutMePropsType> = (props) => {
    return (
        <div className={s.aboutMe}>
            <div className={s.container}>
                <div className={s.title}>
                    <h2>About Me</h2>
                    <span className={s.border}> </span>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci aperiam corporis deleniti ducimus enim eos, facere harum id
                        incidunt nesciunt obcaecati reiciendis, reprehenderit temporibus? Est quibusdam recusandae sit.</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci aperiam
                        corporis deleniti ducimus enim eos, facere harum id incidunt nesciunt obcaecati reiciendis,
                        reprehenderit temporibus? Est quibusdam recusandae sit.</p>
                </div>
                <div className={s.commonInf}>
                    <PersonalDataLeftPart/>
                    <HobbiesRightPart/>
                </div>
            </div>
        </div>
    )
}


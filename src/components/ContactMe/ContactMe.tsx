import React from "react"
import s from './ContactMe.module.css'

type ContactMePropsType = {}

export const ContactMe: React.FC<ContactMePropsType> = (props) => {
    return (
        <div className={s.contactMe}>
            <div className={s.container}>
                <div className={s.title}>
                    <h2>Contact me</h2>
                    <span className={s.border}> </span>
                </div>
            </div>
        </div>
    )
}
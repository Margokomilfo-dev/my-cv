import React from "react"
import s from './Header.module.css'

type HeaderPropsType = {}
export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.myLogo}>My logo</div>
                    <h2>Marharyta Pryshchapionak</h2>
                    <h3>frontend-developer</h3>

                    <div className={s.social}>
                        <ul className={s.socialList}>
                            <li><a className={s.twitter} href='#'>tw</a></li>
                            <li><a className={s.facebook} href='#'>fb </a></li>
                            <li><a className={s.linkedin} href='#'>lk </a></li>
                            <li><a className={s.github} href='#'>gh</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Avatar/>
        </div>
    )
}

export const Avatar: React.FC = () => {
    return (
        <div className={s.avatarSection}>
            <div className={s.avatar}>photo</div>
        </div>
    )
}
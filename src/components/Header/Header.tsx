import React from "react"
import s from './Header.module.css'
import '../../common.css'
import {Avatar} from "./Avatar";
import {SocialNetworks} from "./SocialNetworks";

type HeaderPropsType = {}
export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={s.header}>
            <div className='container'>
                <div className={s.content}>
                    <div className={s.myLogo}>My logo</div>
                    <h2>Marharyta Pryshchapionak</h2>
                    <h3>frontend-developer</h3>
                    <SocialNetworks/>
                </div>
            </div>
            <Avatar/>
        </div>
    )
}



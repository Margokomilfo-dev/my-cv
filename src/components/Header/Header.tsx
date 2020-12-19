import React from 'react'
import s from './Header.module.sass'
import {Avatar} from './Avatar/Avatar'
import {SocialNetworks} from './SocialNetworks/SocialNetworks'

type HeaderPropsType = {}
export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={s.header}>
            <div className='container'>
                <div className={s.content}>
                    <div className={s.myLogo}> </div>
                    <h2>Marharyta Pryshchapionak</h2>
                    <h3>frontend-developer</h3>
                    <SocialNetworks/>
                </div>
            </div>
            <Avatar/>
        </div>
    )
}



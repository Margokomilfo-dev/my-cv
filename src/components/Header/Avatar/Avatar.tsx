import React from 'react'
import s from './Avatar.module.sass'

type AvatarPropsType = {}
export const Avatar: React.FC<AvatarPropsType> = (props) => {
    return (
        <div className={s.avatarSection}>
            <div className={s.avatar}> </div>
        </div>
    )
}
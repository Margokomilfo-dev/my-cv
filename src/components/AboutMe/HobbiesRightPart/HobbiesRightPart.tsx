import React from 'react'
import s from './HobbiesRightPart.module.sass'
import {v1} from 'uuid'

type StateType = { id: string,  name: string }
const state: Array<StateType> = [
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
    {id: v1(), name: 'name' },
]

type HobbiesRightPartPropsType = {}

export const HobbiesRightPart: React.FC<HobbiesRightPartPropsType> = (props) => {
    const hobby = state.map(h => <div className={s.interest}>{h.name}</div>)
    return (
        <div className={s.right}>
            <div className={s.interests}>
                <h4>hobbies & interests</h4>
                <div className={s.titles}>
                    {hobby}
                </div>
            </div>
        </div>
    )
}
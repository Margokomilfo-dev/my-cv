import React from 'react'
import s from './HobbiesRightPart.module.sass'
import {v1} from 'uuid'
import sport from '../../../assets/img/dumbbell.png'
import book from '../../../assets/img/book.png'
import family from '../../../assets/img/house.png'
import paw from '../../../assets/img/paw.png'
import plane from '../../../assets/img/airplane.png'
import mac from '../../../assets/img/mac-os-logo.png'
import money from '../../../assets/img/money.png'
import cinema from '../../../assets/img/video.png'
import sweet from '../../../assets/img/sweet.png'
import coffee from '../../../assets/img/coffee.png'


type StateType = { id: string,  name: string, img: any }
const state: Array<StateType> = [
    {id: v1(), name: 'Sport', img: sport },
    {id: v1(), name: 'Books', img: book },
    {id: v1(), name: 'Family', img: family },
    {id: v1(), name: 'Animals', img: paw },
    {id: v1(), name: 'Travels', img: plane },
    {id: v1(), name: 'Mac OS', img: mac },
    {id: v1(), name: 'Money', img: money },
    {id: v1(), name: 'Cinema', img: cinema },
    {id: v1(), name: 'Sweets', img: sweet },
    {id: v1(), name: 'Coffee', img: coffee },
]

type HobbiesRightPartPropsType = {}

export const HobbiesRightPart: React.FC<HobbiesRightPartPropsType> = (props) => {
    const hobby = state.map(h =>
        <div className={s.interest} data-aos="fade-in">
            <div><img src={h.img} alt=""/></div>
            <div>{h.name}</div>
         </div>)
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
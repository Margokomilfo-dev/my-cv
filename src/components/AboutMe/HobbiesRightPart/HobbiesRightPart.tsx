import React from 'react'
import s from './HobbiesRightPart.module.sass'
import {v1} from 'uuid'
import sport from '../../../assets/img/icons/dumbbell.png'
import book from '../../../assets/img/icons/book.png'
import family from '../../../assets/img/icons/house.png'
import paw from '../../../assets/img/icons/pawprint.png'
import plane from '../../../assets/img/icons/airplane.png'
import mac from '../../../assets/img/icons/apple.png'
import money from '../../../assets/img/icons/money.png'
import cinema from '../../../assets/img/icons/video.png'
// import sweet from '../../../assets/img/icons/sweet.png'
import coffee from '../../../assets/img/icons/coffee.png'
import habr from '../../../assets/img/icons/info.png'
import stackoverflow from '../../../assets/img/icons/overflowing.png'
import codewars from '../../../assets/img/icons/web-programming.png'


type StateType = { id: string,  name: string, img: any }
const state: Array<StateType> = [
    {id: v1(), name: 'Sport', img: sport },
    {id: v1(), name: 'Books', img: book },
    {id: v1(), name: 'Family', img: family },
    {id: v1(), name: 'codewars', img: codewars },
    {id: v1(), name: 'Animals', img: paw },
    {id: v1(), name: 'Travels', img: plane },
    {id: v1(), name: 'Mac OS', img: mac },
    {id: v1(), name: 'Money', img: money },
    {id: v1(), name: 'Cinema', img: cinema },
    {id: v1(), name: 'stackoverflow', img: stackoverflow },
    // {id: v1(), name: 'Sweets', img: sweet },
    {id: v1(), name: 'habr', img: habr },
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
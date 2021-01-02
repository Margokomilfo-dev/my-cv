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
import {useTranslation} from 'react-i18next'


type StateType = { id: string,  name: string, img: any }


type HobbiesRightPartPropsType = {}

export const HobbiesRightPart: React.FC<HobbiesRightPartPropsType> = (props) => {
    const {t} = useTranslation()
    const state: Array<StateType> = [
        {id: v1(), name: t('aboutMe.right.1'), img: sport },
        {id: v1(), name: t('aboutMe.right.2'), img: book },
        {id: v1(), name: t('aboutMe.right.3'), img: family },
        {id: v1(), name: t('aboutMe.right.4'), img: codewars },
        {id: v1(), name: t('aboutMe.right.5'), img: paw },
        {id: v1(), name: t('aboutMe.right.6'), img: plane },
        {id: v1(), name: t('aboutMe.right.7'), img: mac },
        {id: v1(), name: t('aboutMe.right.8'), img: money },
        {id: v1(), name: t('aboutMe.right.9'), img: cinema },
        {id: v1(), name: t('aboutMe.right.10'), img: stackoverflow },
        // {id: v1(), name: 'Sweets', img: sweet },
        {id: v1(), name: t('aboutMe.right.11'), img: habr },
        {id: v1(), name: t('aboutMe.right.12'), img: coffee },
    ]

    const hobby = state.map(h =>
        <div className={s.interest} data-aos="fade-in" key={h.id}>
            <div><img src={h.img} alt=""/></div>
            <div>{h.name}</div>
         </div>)
    return (
        <div className={s.right}>
            <div className={s.interests}>
                <h4>{t('aboutMe.right.0')}</h4>
                <div className={s.titles}>
                    {hobby}
                </div>
            </div>
        </div>
    )
}
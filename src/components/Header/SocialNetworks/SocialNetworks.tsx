import React from 'react'
import s from './SocialNetworks.module.sass'
import {v1} from 'uuid'
import facebook from '../../../assets/img/facebook.png'
import linkedin from '../../../assets/img/linkedin.png'
import github from '../../../assets/img/github.png'
import instagram from '../../../assets/img/instagram.png'
import twitter from '../../../assets/img/twitter.png'

const state = [
    {id: v1(), name: 'tw',  img: facebook },
    {id: v1(), name: 'fb', img: linkedin},
    {id: v1(), name: 'lk', img: github},
    {id: v1(), name: 'gh', img: instagram},
    {id: v1(), name: 'gh', img: twitter},
]
export const SocialNetworks: React.FC = () => {
    const socials = state.map(network => <li><a className={s.name} href='#'><img src={network.img} alt="facebook"/></a></li>)
    return (
        <div className={s.social}>
            <ul className={s.socialList}>
                {state.map(network => <li><a className={s.name} href='#'><img src={network.img} alt="facebook"/></a></li>)}
            </ul>
        </div>
    )
}
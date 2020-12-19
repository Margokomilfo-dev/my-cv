import React from 'react'
import s from './SocialNetworks.module.sass'
import {v1} from 'uuid'
import facebook from '../../../assets/img/facebook.png'
import linkedin from '../../../assets/img/linkedin.png'
import github from '../../../assets/img/github.png'
import instagram from '../../../assets/img/instagram.png'
import twitter from '../../../assets/img/twitter.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

// const state = [
//     {id: v1(), name: 'tw',  img: facebook, link: '#' },
//     {id: v1(), name: 'fb', img: linkedin, link: '#'},
//     {id: v1(), name: 'lk', img: github, link: '#'},
//     {id: v1(), name: 'gh', img: instagram, link: '#'},
//     {id: v1(), name: 'gh', img: twitter, link: '#'},
// ]
const state = [
    {id: v1(), name: 'tw',  img: faFacebookF, link: '#' },
    {id: v1(), name: 'fb', img: faLinkedinIn, link: '#'},
    {id: v1(), name: 'lk', img: faGithub, link: '#'},
    {id: v1(), name: 'gh', img: faInstagram, link: '#'},
    {id: v1(), name: 'gh', img: faTwitter, link: '#'},
]
export const SocialNetworks: React.FC = () => {
    // const socials = state.map(network => <li><a className={s.name} href={network.link}><img src={network.img} alt="facebook"/></a></li>)
    const socials = state.map(network => <li><a className={s.name} href={network.link}> <FontAwesomeIcon icon={network.img} className={s.socialLib}/></a></li>)
    return (
        <div className={s.social}>
            <ul className={s.socialList}>
                {socials}
            </ul>
        </div>
    )
}
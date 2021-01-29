import React from 'react'
import s from './SocialNetworks.module.sass'
import {v1} from 'uuid'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

const state = [
    {id: v1(), name: 'fb', img: faFacebookF , link: 'https://www.facebook.com/margarita.prishchepionok'},
    {id: v1(), name: 'lk', img: faLinkedinIn , link: 'https://www.linkedin.com/in/margo-pryshchapionak'},
    {id: v1(), name: 'gh', img: faGithub , link: 'https://github.com/Margokomilfo-dev/'},
    {id: v1(), name: 'insta', img: faInstagram, link: 'https://www.instagram.com/margo.komilfo/'},
]
export const SocialNetworks: React.FC = () => {
    const socials = state.map(network =>
        <li key={network.id}><a className={s.name} href={network.link} target="_blank">
            <FontAwesomeIcon icon={network.img} /></a>
        </li>
    )
    return (
        <div className={s.social}>
            <ul className={s.socialList}>
                {socials}
            </ul>
        </div>
    )
}
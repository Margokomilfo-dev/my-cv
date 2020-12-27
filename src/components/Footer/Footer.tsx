import React from 'react'
import styles from '../../common/commonStyles.module.sass'
import s from './Footer.module.sass'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {SocialNetworks} from '../Header/SocialNetworks/SocialNetworks'

export const Footer: React.FC = () => {
    return (

            <div className={s.footer}>
                <div className={styles.container}>
                <p> <FontAwesomeIcon icon={faCopyright}/>2020 <span>Marharyta Pryshchapionak</span> <br/>
                All Rights Reserved.</p>
                    <SocialNetworks />
            </div>

        </div>
    )
}
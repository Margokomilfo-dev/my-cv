import s from './Menu.module.sass'
import React, {useState} from 'react'
import {Link} from "react-scroll"
import {useTranslation} from 'react-i18next'

export const Menu = () => {
    const [status, setStatus] = useState(false)
    const {t} = useTranslation()
    return (

        <div  className={s.wrapper} >
            {!status &&
            <div className={s.menu} onClick={() => setStatus(!status)}>
                <div className={s.menuLine}> </div>
                <div className={s.menuLine}> </div>
                <div className={s.menuLine}> </div>
            </div>
            }
            {status &&
                   <div className={s.menuBlock}>
                       <div className={s.menuTitle} onClick={() => setStatus(!status)}>
                           <div>menu </div>
                           <div>X</div>
                       </div>
                       <div className={s.menuItems}>
                           <ul>
                               {/*<li className={s.navListItem}><Link className={s.navListLink} to="become" smooth={true} duration={1000}>Как это работает</Link>*/}
                               <li><Link href="#" to='home' smooth={true} duration={1000}>{t('menu.home')}</Link></li>
                               <li><Link href="#" to='aboutMe' smooth={true} duration={1000}>{t('menu.aboutMe')}</Link></li>
                               <li><Link href="#" to='resume' smooth={true} duration={1000}>{t('menu.resume')}</Link></li>
                               <li><Link href="#" to='works' smooth={true} duration={1000}>{t('menu.works')}</Link></li>
                               <li><Link href="#" to='skills' smooth={true} duration={1000}>{t('menu.skills')}</Link></li>
                               <li><Link href="#" to='contactme' smooth={true} duration={1000}>{t('menu.contact')}</Link></li>
                           </ul>
                       </div>

                   </div>
            }


        </div>
    )
}
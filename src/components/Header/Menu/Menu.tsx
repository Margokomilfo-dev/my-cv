import s from './Menu.module.sass'
import React, {useState} from 'react'
import {Link} from "react-scroll"

export const Menu = () => {
    const [status, setStatus] = useState(false)
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
                               <li><Link href="#" to='home' smooth={true} duration={1000}> Home </Link></li>
                               <li><Link href="#" to='aboutMe' smooth={true} duration={1000}> About me </Link></li>
                               <li><Link href="#" to='resume' smooth={true} duration={1000}> Resume </Link></li>
                               <li><Link href="#" to='works' smooth={true} duration={1000}> Works </Link></li>
                               <li><Link href="#" to='skills' smooth={true} duration={1000}> Skills </Link></li>
                               <li><Link href="#" to='contactme' smooth={true} duration={1000}> Contact </Link></li>
                           </ul>
                       </div>

                   </div>
            }


        </div>
    )
}
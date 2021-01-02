import React, {useEffect, useState} from 'react'
import {useWindowScroll} from 'react-use'
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import s from './ScrollToTop.module.sass'

export const  ScrollToTop = () => {
    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisiblity] = useState(false)
    useEffect(() => {
        if(pageYOffset > 400){
            setVisiblity(true)
        }else{
            setVisiblity(false)
        }
    }, [pageYOffset])

    if (!visible) {
        return <div> Done</div>
    }
    return (
        <div className={s.scrollToTop}>
            {visible &&
            <Link href="#" to='home' smooth={true} duration={1000} className={s.icon}>
                <FontAwesomeIcon icon={faChevronUp}/></Link>
                }
        </div>

    )
}

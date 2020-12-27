import React from 'react'
import s from './Insertion.module.sass'
import styles from '../../common/commonStyles.module.sass'
import {Link} from 'react-scroll'
import bgr from '../../assets/img/insertingBG.jpg'


type InsertionPropsType = {
    title: string
}
export const Insertion: React.FC<InsertionPropsType> = (props) => {
    const bg = {backgroundImage: `url(${bgr})`}
    return (
        <div className={s.insertion} style={bg}>
            <div className={styles.container}>
                <div className={s.content}>
                    <h1>{props.title}</h1>
                    <Link href="#" to='contactme' smooth={true} duration={1000} className={styles.button} > Hire me now </Link>
                </div>
            </div>
        </div>
    )
}
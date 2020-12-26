import React from 'react'
import s from './Insertion.module.sass'
import styles from '../../common/commonStyles.module.sass'


type InsertionPropsType = {
    title: string
}
export const Insertion: React.FC<InsertionPropsType> = (props) => {

    return (
        <div className={s.insertion}>
            <div className={styles.container}>
                <div className={s.content}>
                    <h1>{props.title}</h1>
                    <button className={styles.button}> Hire me now</button>
                </div>
            </div>
        </div>
    )
}
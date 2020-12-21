import s from './AboutMeCommon.module.sass'
import React from 'react'

const state: Array<{ id: number, text: string }> = [
    {id: 1,text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet assumenda delectus deleniti dolore doloribus, ducimus eius explicabo fugit id ipsum labore modi odio omnis, quaerat quidem reprehenderit ut voluptatem?'},
    {id: 2,text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet assumenda delectus' +
            ' deleniti dolore doloribus, ducimus eius explicabo fugit id ipsum labore modi odio omnis, quaerat quidem reprehenderit ut voluptatem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet assumenda delectus deleniti dolore doloribus, ducimus eius explicabo fugit id ipsum labore modi odio omnis, quaerat quidem reprehenderit ut voluptatem?'},
]
export const AboutMeCommon = () => {
    return (
        <div className={s.text}>
            <p data-aos="fade-in"><span>{state[0].text}</span></p>
            <p data-aos="fade-in">{state[1].text}</p>
        </div>
    )
}
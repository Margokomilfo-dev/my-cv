import s from './AboutMeCommon.module.sass'
import React from 'react'

const state: Array<{ id: number, text: string }> = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci aperiam corporis deleniti ducimus enim eos, facere harum idincidunt nesciunt obcaecati rreprehenderit temporibus? Est quibusdam recusandae sit.'
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci aperiam corporis deleniti ducimus enim eos, facere harum id\n' +
            '                        incidunt nesciunt obcaecati reiciendis,\n' +
            '                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci aperiam corporis deleniti ducimus enim eos, facere harum id\n' +
            '                        incidunt nesciunt obcaecati rreprehenderit temporibus? Est quibusdam recusandae sit.'
    },
]
export const AboutMeCommon = () => {
    return (
        <div className={s.text}>
            <p><span>{state[0].text}</span></p>
            <p>{state[1].text}</p>
        </div>
    )
}
import s from './AboutMeCommon.module.sass'
import React from 'react'

const state: Array<{ id: number, text: string }> = [
    {id: 1,text: 'Front-end (react) developer – that is what I have been going\n' +
            'with confident small steps the past 2 years. Daily work on\n' +
            'yourself, pumping my skills, learning English and reading\n' +
            'technical literature helps me get closer to my goal every day.\n' +
            'Easy? No. Nevertheless, I am ready for difficulties. Ready to\n' +
            'learn and develop. Now I am writing with some projects to\n' +
            'demonstrate and consolidate my skills. Its underway - the\n' +
            'functionality is expanding, errors are being fixed. '},
    {id: 2,text: 'In Poland, I have a permanent place of residence with access to\n' +
            'work like local residents. I am a hardworking and goal-oriented\n' +
            'person with a great motivation to achieve high results and\n' +
            'become a highly qualified professional. '},
    {id: 3,text: 'My main goal at work is to do more than anyone expects from\n' +
            'me and grow as a professional together with the company. I\n' +
            'would like to join your team and I believe that together we will\n' +
            'be able to make this world a better place'},
]
export const AboutMeCommon = () => {
    return (
        <div className={s.text}>
            <p data-aos="fade-in"><span>{state[0].text}</span></p>
            <p data-aos="fade-in">{state[1].text}</p>
            <p data-aos="fade-in">{state[2].text}</p>
        </div>
    )
}
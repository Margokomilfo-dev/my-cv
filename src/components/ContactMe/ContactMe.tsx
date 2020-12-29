import React from 'react'
import s from './ContactMe.module.sass'
import styles from '../../common/commonStyles.module.sass'
import emailjs from 'emailjs-com'
import {PersonalInfo} from '../AboutMe/PersonalDataLeftPart/PersonalInfo/PersonalInfo'

type ContactMePropsType = {}

export const ContactMe: React.FC<ContactMePropsType> = (props) => {
    // @ts-ignore
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_eeq5hqk', 'template_7t0jgk9', e.target, 'user_DGeTRjJg48EA5O4osrVMJ')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        e.target.reset()
        alert('done!! Have a nice time!')
    }
    return (
        <div className={styles.blockName} data-aos="fade-in" id='contactme'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>Contact me</h2>
                    <span className={styles.border}> </span>
                </div>
                <div className={s.commonInf}>
                    <div className={s.left}>
                        <h2>LET'S GET IN TOUCH</h2>
                        <PersonalInfo/>
                    </div>
                    <div className={s.right}>
                        <h2>DROP ME A LINE</h2>
                        <form className={s.contactForm} onSubmit={sendEmail}>
                            <div className={s.inputName}>
                                <label>
                                    <span>Your name:</span>
                                    <input type="text" placeholder={'name'} name='name'/>
                                </label>
                            </div>
                            <div className={s.inputEmail}>
                                <label>
                                    <span>Your email:</span>
                                    <input type="text" placeholder={'email@gmail.com'} name='email'/>
                                </label>

                            </div>
                            <div className={s.textareaMessage}>
                                <label>
                                    <span>Your message:</span>
                                    <textarea placeholder="Your message..." name='message'></textarea>
                                </label>
                            </div>
                            <div className={s.button}>
                                <button type={'submit'} className={styles.button}>Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}
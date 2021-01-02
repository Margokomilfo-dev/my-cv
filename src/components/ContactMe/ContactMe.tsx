import React, {useState} from 'react'
import s from './ContactMe.module.sass'
import styles from '../../common/commonStyles.module.sass'
import emailjs from 'emailjs-com'
import {PersonalInfo} from '../AboutMe/PersonalDataLeftPart/PersonalInfo/PersonalInfo'
import {useTranslation} from 'react-i18next'

type ContactMePropsType = {}

export const ContactMe: React.FC<ContactMePropsType> = (props) => {
    const {t} = useTranslation()
    const [send, setSend] = useState(false)
    // @ts-ignore
    const sendEmail = (e) => {
        setSend(true)
        e.preventDefault()
        emailjs.sendForm('service_eeq5hqk', 'template_7t0jgk9', e.target, 'user_DGeTRjJg48EA5O4osrVMJ')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
        e.target.reset()

        const timeOutID = setTimeout(() => {
            setSend(false)
        }, 5000)
        return () => {
            clearTimeout(timeOutID)
        }
    }

    return (
        <div className={styles.blockName} data-aos="fade-in" id='contactme'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>{t('contactMe.title')}</h2>
                    <span className={styles.border}> </span>
                </div>
                <div className={s.commonInf}>
                    <div className={s.left}>
                        <h2>{t('contactMe.inTouch')}</h2>
                        <PersonalInfo/>
                    </div>
                    <div className={s.right}>
                        <h2>{t('contactMe.dropMe')}</h2>

                            <form className={s.contactForm} onSubmit={sendEmail}>
                                <div className={s.inputName}>
                                    <label>
                                        <span>{t('contactMe.yourName')}:</span>
                                        <input type="text" placeholder={t('contactMe.placeholderName')}
                                               name='name'/>
                                    </label>
                                </div>
                                <div className={s.inputEmail}>
                                    <label>
                                        <span>{t('contactMe.yourEmail')}:</span>
                                        <input type="text" placeholder={'email@gmail.com'} name='email'/>
                                    </label>

                                </div>
                                <div className={s.textareaMessage}>
                                    <label>
                                        <span>{t('contactMe.yourMessage')}:</span>
                                        <textarea placeholder={t('contactMe.placeholderMessage')} name='message'></textarea>
                                    </label>
                                </div>
                                <div className={s.button}>
                                    <button type={'submit'}
                                            className={styles.button}>{t('contactMe.sendMessage')}</button>
                                </div>
                                {send && <div className={s.sentPlace}> <span>{t('contactMe.thank')} <br/>{t('contactMe.alert')}</span></div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

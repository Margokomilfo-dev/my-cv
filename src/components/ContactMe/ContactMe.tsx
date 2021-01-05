import React, {useState} from 'react'
import s from './ContactMe.module.sass'
import styles from '../../common/commonStyles.module.sass'
import emailjs from 'emailjs-com'
import {PersonalInfo} from '../AboutMe/PersonalDataLeftPart/PersonalInfo/PersonalInfo'
import {useTranslation} from 'react-i18next'
import {useFormik} from 'formik'

type FormikErrorType = {
    name?: string
    email?: string
}

type ContactMePropsType = {}

export const ContactMe: React.FC<ContactMePropsType> = (props) => {
    const {t} = useTranslation()
    const [send, setSend] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = t('contactMe.errorEmail1')
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(values.email)) {
                errors.email = t('contactMe.errorName2')
            }
            if (!values.name) {
                errors.name = t('contactMe.errorName1')
            }else if (values.name.length < 2  ) {
                errors.name = t('contactMe.errorName2')
            }
            return errors;
        },
        onSubmit: (values) => {}
    })
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
                                        <input type="text"
                                               placeholder={t('contactMe.placeholderName')}
                                               {...formik.getFieldProps('name')}
                                        />
                                    </label>
                                </div>
                                {formik.touched.name && formik.errors.name ? <div className={s.error}>{formik.errors.name}</div> : null}
                                <div className={s.inputEmail}>
                                    <label>
                                        <span>{t('contactMe.yourEmail')}:</span>
                                        <input type="text"
                                               placeholder={'email@gmail.com'}
                                               {...formik.getFieldProps('email')}
                                        />
                                    </label>
                                </div>
                                {formik.touched.email && formik.errors.email ? <div className={s.error}>{formik.errors.email}</div> : null}
                                <div className={s.textareaMessage}>
                                    <label>
                                        <span>{t('contactMe.yourMessage')}:</span>
                                        <textarea placeholder={t('contactMe.placeholderMessage')} name='message'></textarea>
                                    </label>
                                </div>
                                <div className={s.button}>
                                    <button type={'submit'} className={styles.button} disabled={!!formik.errors.name || !!formik.errors.email }>
                                        {t('contactMe.sendMessage')}
                                    </button>
                                </div>
                                {send && <div className={s.sentPlace}> <span>{t('contactMe.thank')} <br/>{t('contactMe.alert')}</span></div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

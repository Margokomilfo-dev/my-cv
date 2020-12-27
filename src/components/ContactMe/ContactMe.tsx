import React, {ChangeEvent, DetailedHTMLProps, FormHTMLAttributes} from 'react'
// import s from './ContactMe.module.sass'
import s from './ContactMe.module.css'
import styles from '../../common/commonStyles.module.sass'
import emailjs from 'emailjs-com'

type ContactMePropsType = {}

export const ContactMe: React.FC<ContactMePropsType> = (props) => {
    // @ts-ignore
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eeq5hqk', 'template_7t0jgk9', e.target, 'user_DGeTRjJg48EA5O4osrVMJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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

                <form className={s.contactForm} onSubmit={sendEmail}>
                    <div className={s.inputName}>
                        <input type="text" placeholder={'name'} name='name'/>
                    </div>
                    <div className={s.inputEmail}>
                        <input type="text" placeholder={'email'} name='email' />
                    </div>
                    <div className={s.textareaMessage}>
                        <textarea placeholder='message' name='message' rows={8}> </textarea>
                    </div>
                    <div className={s.button}>
                        <button type={"submit"} className={styles.button}>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
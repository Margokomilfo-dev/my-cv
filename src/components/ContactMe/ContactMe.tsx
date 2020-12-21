import React from "react"
// import s from './ContactMe.module.sass'
import s from './ContactMe.module.css'
import styles from '../../common/commonStyles.module.sass'

type ContactMePropsType = {}

export const ContactMe: React.FC<ContactMePropsType> = (props) => {
    return (
        <div className={styles.blockName} data-aos="fade-in" id='contactme'>
            <div className={styles.container}>
                <div className={styles.blockTitle}>
                    <h2>Contact me</h2>
                    <span className={styles.border}> </span>
                </div>

                <div className={s.contactForm}>
                    <div className={s.inputName}>
                        <input type="text" placeholder={'name'} name='name'/>
                    </div>
                    <div className={s.inputEmail}>
                        <input type="text" placeholder={'email'} name='email' />
                    </div>
                    <div className={s.textareaMessage}>
                        <textarea placeholder='message' name='message' rows={8}> </textarea>
                    </div>
                    <div>
                        <button type={"submit"} className={s.button}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import s from './ContactMe.module.css'

type ContactMePropsType = {}

export const ContactMe: React.FC<ContactMePropsType> = (props) => {
    return (
        <div className='blockName'>
            <div className='container'>
                <div className='blockTitle'>
                    <h2>Contact me</h2>
                    <span className='border'> </span>
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
                        <button className={s.button}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
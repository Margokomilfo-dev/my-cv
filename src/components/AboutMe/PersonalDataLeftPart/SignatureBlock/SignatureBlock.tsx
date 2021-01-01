import React from 'react'
import s from './SignatureBlock.module.sass'
import styles from '../../../../common/commonStyles.module.sass'
// @ts-ignore
import pdf from '../../../../assets/docs/CVenglish.pdf'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from 'react-i18next'


export const SignatureBlock: React.FC = () => {
    const {t} = useTranslation()
    const state = {
        name: t('name') as string
    }
    return (
        <div className={s.signatureBlock}>
            <div className={s.signature} data-aos="fade-in">{state.name}</div>
            <div className={styles.button}>
                <a href={pdf} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload}/> {t('aboutMe.left.buttonName')}</a>
            </div>
        </div>
    )
}
//react-icon
import { ImLinkedin2 } from 'react-icons/im'
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

//styles
import styles from './component.module.scss'


export default function Contact() {
    return <>
        <div className={styles.footContainer}>
            <p>Contact Me</p>
            <div className={styles.iconContainer}>
                <a href="https://linkedin.com/in/silviajocunda" target="_blank"><ImLinkedin2 /></a>
                <a href="https://github.com/jocunda" target="_blank"><AiFillGithub /></a>
                <a href="https://leetcode.com/Jocunda/" target="_blank"><SiLeetcode /></a>
                <a href="mailto:silviawanshan88@gmail.com" target="_blank" title="silviawanshan88@gmail.com"><FiMail /></a>
            </div>
        </div>

    </>
}
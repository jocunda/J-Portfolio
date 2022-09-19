//react-icon
import { ImLinkedin2 } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

//styles
import styles from './component.module.scss'


export default function Contact() {
    return <>
        <div className={styles.footContainer}>
            <p>Contact</p>
            <div className={styles.iconContainer}>
                <ImLinkedin2 />
                <AiFillGithub />
                <FiMail />
            </div>
        </div>

    </>
}
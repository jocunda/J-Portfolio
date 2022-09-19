//components
import Work from "./work";
import Contact from "./contact";


//styles
import styles from './component.module.scss'


//assets
import woman from '../assets/image/womanpic.jpg'

export default function Home() {

    return <>
        <div className={styles.biodataContainer}>
            <img src={woman} className={styles.biodataimg} />
            <h5 className={styles.contentTitle}>I am Amy and I love to work on your next project</h5>
            <p className={styles.content}>Non amet aliquip sint ullamco anim proident anim. Cillum laboris deserunt proident esse. Anim sit officia cupidatat duis. </p>
        </div>

        <Work />

        <footer>
            <Contact />
        </footer>
    </>
}
//components
import Work from "./work";
import Contact from "./contact";


//styles
import styles from './component.module.scss'


export default function Home() {

    return <>
        <h1 className={styles.title}>Home</h1>
        <Work />
        <Contact />
    </>
}
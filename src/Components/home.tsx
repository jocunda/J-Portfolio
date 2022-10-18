//components
import Work from "./work";
import Contact from "./contact";


//styles
import styles from './component.module.scss'


//assets
import woman from '../assets/image/womanpic.jpg'
import Carousel from "../function/carousel";
//data
import HOMEIMAGES from "../data/homeimage";
import Feature from "./feature";


export default function Home() {

    return <>
        {/* upper navbar */}
        <div className={styles.navbar}>
            <a href="#home">Home</a>
            <a href="#work">Works</a>
            <a href="#contact">Contact</a>
        </div>

        {/* carousel home image */}
        <div className={styles.homeheaderContainer} id="home">
            <Carousel images={HOMEIMAGES} autoPlayTime={3000} />
            <h1>Design solution Make Easy</h1>
            <p>Aliquip elit enim voluptate sit mollit ad officia veniam minim dolore. Commodo eu ad excepteur aliquip nostrud non fugiat. Minim Lorem nulla proident id. Ut veniam do sunt eiusmod duis esse in.</p>
        </div>

        {/* gridbox feature */}
        <Feature />

        {/* biodata */}
        <div className={styles.biodataContainer} id="work">
            <img src={woman} className={styles.biodataimg} />
            <h5 className={styles.contentTitle}>Hi, I am Silvia</h5>
            <p className={styles.content}>Non amet aliquip sint ullamco anim proident anim. Cillum laboris deserunt proident esse. Anim sit officia cupidatat duis. </p>
        </div>

        {/* selected work */}
        <Work />

        {/* footer contact */}
        <footer id="contact">
            <Contact />
        </footer>
    </>
}
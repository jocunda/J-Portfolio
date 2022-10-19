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
            <p>Ipsum dolor exercitation sit mollit sit consequat Lorem pariatur enim consectetur irure. Aute anim sit ad adipisicing amet aute. Dolor ex dolore duis duis labore Lorem ad pariatur anim voluptate laborum. Aliquip velit proident consequat commodo eu dolore consectetur ad excepteur do enim. Nulla ipsum eu fugiat adipisicing ea qui laborum do aute velit eu cillum nostrud adipisicing.</p>
        </div>

        {/* gridbox feature */}
        <Feature />

        {/* biodata */}
        <div className={styles.biodataContainer} id="work">
            <img src={woman} className={styles.biodataimg} />
            <h5 className={styles.contentTitle}>Hi, I am Silvia</h5>
            <p className={styles.content}>Self-taught programming languages for HTML, CSS, Javascript and Typescript. I have a high interest in front-end web development and design.
            </p>
        </div>

        {/* selected work */}
        <Work />

        {/* footer contact */}
        <footer id="contact">
            <Contact />
        </footer>
    </>
}
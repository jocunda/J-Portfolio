//JSON
import WORKIMAGES from '../data/image'

//assets
import { useState } from "react";

//styles
import styles from './function.module.scss'


export default function Carousel() {
    const [image, setImage] = useState<number>(0);



    return <>
        <div className={styles.homeimageContainer}>
            {WORKIMAGES.map(({ image, text }, index) =>
                <div key={index} >
                    <img src={image} alt={text} className={styles.homeimage} />
                </div>
            )}
        </div>
        <ul className={styles.slideContainer}>
            <li className={styles.slide}><button className={image === 1 ? styles.active : ""} onClick={() => setImage(1)}>1</button></li>
            <li className={styles.slide}><button className={image === 2 ? styles.active : ""} onClick={() => setImage(2)}>2</button></li>
            <li className={styles.slide}><button className={image === 3 ? styles.active : ""} onClick={() => setImage(3)}>3</button></li>
            <li className={styles.slide}><button className={image === 4 ? styles.active : ""} onClick={() => setImage(4)}>4</button></li>
        </ul>
    </>
}

//assets
import { useEffect, useState } from "react";

//styles
import styles from './function.module.scss';

import cx from 'classnames'

type CarouselType = {
    images: HomeImage[]
    autoPlayTime: number
}

export default function Carousel({ images, autoPlayTime }: CarouselType) {
    const [imagekey, setImagekey] = useState<number>(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setImagekey(imagekey === images.length - 1 ? 0 : imagekey + 1);
    //     }, autoPlayTime);

    //     return () => clearTimeout(timer);
    // }, [imagekey]);

    return <>
        <div>
            {images.map(({ image, key }, index) =>
                <div key={index} className={imagekey === key ? cx(styles.homeimageContainer, styles.activeimage) : styles.homeimageContainer}>
                    <img src={image} className={styles.homeimage} />
                </div>
            )}
        </div>
        <ul className={styles.slideContainer}>
            {images.map(({ key }, index) =>
                <>
                    <li className={styles.slide} key={index}><button className={imagekey === key ? styles.active : ""} onClick={() => setImagekey(key)}>{key}</button></li>
                </>
            )}
        </ul>
    </>
}
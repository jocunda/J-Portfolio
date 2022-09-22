//styles
import styles from './component.module.scss'

//JSON
import WORKIMAGES from '../data/image'


import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import { useState } from 'react';
import cx from 'classnames';

export default function Work() {

    const initialState = Math.floor(WORKIMAGES.length / 2);
    const [work, setWork] = useState<number>(initialState);



    function nextSlide() {
        setWork(work === WORKIMAGES.length - 1 ? 0 : work + 1)
    };
    function prevSlide() {
        setWork(work === 0 ? WORKIMAGES.length - 1 : work - 1)
    };

    // function slickimage(key: number) {
    //     if (key === work) {
    //         return cx(styles.workimage, styles.imageactive)
    //     } else if (key === work - 1) {
    //         return cx(styles.workimage, styles.clippedleft)
    //     } else if (key === work + 1) {
    //         return cx(styles.workimage, styles.clippedright)
    //     }
    //     else return styles.imagenonactive
    // }


    return <>
        <h2>My Works</h2>
        <div className={styles.workimageContainer}>
            {WORKIMAGES.map(({ key, image, text }, index) =>
                <div key={index} >
                    <img src={image} alt={text} className={styles.workimage} />
                </div>
            )}
        </div>
        <div className={styles.arrowleftright}>
            <a onClick={prevSlide}><IoMdArrowDropleftCircle /></a>
            <a onClick={nextSlide}><IoMdArrowDroprightCircle /></a>
        </div>

    </>
}
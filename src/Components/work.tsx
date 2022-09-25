//styles
import styles from './component.module.scss'

//JSON
import WORKIMAGES from '../data/image'


import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import { useState } from 'react';
import cx from 'classnames';

export default function Work() {

    const initialState = Math.floor(WORKIMAGES.length / 2);
    const containerState = -45
    const [work, setWork] = useState<number>(initialState);
    const [container, setContainer] = useState<number>(containerState);



    function nextSlide() {
        setWork(work === WORKIMAGES.length - 1 ? 0 : work + 1)
        setContainer(work === WORKIMAGES.length - 1 ? containerState : container - 7)
    };
    function prevSlide() {
        setWork(work === 0 ? WORKIMAGES.length - 1 : work - 1)
        setContainer(work === 0 ? WORKIMAGES.length - containerState : container + 7)
    };

    return <>
        <h2>My Works</h2>
        <div className={styles.workimageSlick}>
            <div className={styles.workimageContainer} style={{ transform: `translate3d(calc(${container}% + 2vmin), 0px, 0px)` }}>
                {WORKIMAGES.map(({ key, image, text }, index) =>
                    <div key={index} className={styles.workimagediv}>
                        <img src={image} alt={text} className={key === work ? cx(styles.workimage, styles.imageactive) : styles.workimage} />
                    </div>
                )}
            </div>
        </div>

        <div className={styles.arrowleftright}>
            <a onClick={prevSlide}><IoMdArrowDropleftCircle /></a>
            <a onClick={nextSlide}><IoMdArrowDroprightCircle /></a>
        </div>

    </>
}
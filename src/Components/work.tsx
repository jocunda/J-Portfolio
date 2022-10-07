//styles
import styles from './component.module.scss'

//JSON
import WORKIMAGES from '../data/image'

//react-icon
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import { VscChromeClose } from 'react-icons/vsc'
import { BiLinkExternal } from 'react-icons/bi'

import { useState } from 'react';
import cx from 'classnames';


export default function Work() {
    const initialState = Math.floor(WORKIMAGES.length / 2);
    const containerState = -45
    const [work, setWork] = useState<number>(initialState);
    const [container, setContainer] = useState<number>(containerState);
    const [preview, setPreview] = useState<boolean>(false);


    //image controller
    function nextSlide() {
        setWork(work === WORKIMAGES.length - 1 ? 0 : work + 1)
        setContainer(work === WORKIMAGES.length - 1 ? containerState : container - 7)
    };
    function prevSlide() {
        setWork(work === 0 ? WORKIMAGES.length - 1 : work - 1)
        setContainer(work === 0 ? WORKIMAGES.length - containerState : container + 7)
    };

    //image preview
    function getpreview() {
        setPreview(true)
    }


    return <>
        <h2>My Works</h2>
        <div className={styles.workimageSlick}>
            <div className={styles.workimageContainer} style={{ transform: `translate3d(calc(${container}% + 2vmin), 0px, 0px)` }}>
                {WORKIMAGES.map(({ key, image, text }, index) =>
                    <div key={index} className={styles.workimagediv} onClick={getpreview}>
                        <img src={image} alt={text} className={key === work ? cx(styles.workimage, styles.imageactive) : styles.workimage} />
                    </div>
                )}
            </div>
        </div>

        <div className={styles.arrowleftright}>
            <a onClick={prevSlide}><IoMdArrowDropleftCircle /></a>
            <a onClick={nextSlide}><IoMdArrowDroprightCircle /></a>
        </div>

        <div className={preview ? styles.preview : styles.nonpreview}>
            <img src="" alt="" />
            <p>Text</p>
            <a href="" target="_blank" rel="noreferrer" className={styles.linkExternal}><BiLinkExternal /></a>
            <VscChromeClose className={styles.previewClose} onClick={() => setPreview(false)} />
        </div>
    </>
}
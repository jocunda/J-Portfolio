//styles
import styles from './component.module.scss'

//JSON
import WORKIMAGES from '../data/image'
import back1 from '../assets/backgroundImage/back1.jpg'

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
    const [preimage, setPreimage] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [text, setText] = useState<string>();
    const [framework, setFramework] = useState<string>();
    const [prelink, setprelink] = useState<string>();


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
    function getpreview({ image, title, text, framework, link }: WorkImage) {
        setPreview(true)
        setPreimage(image)
        setTitle(title)
        setText(text)
        setFramework(framework)
        setprelink(link)
    }


    return <>
        <h2>My Works</h2>

        {/* imageslide */}
        <div className={styles.workimageSlick}>
            <div className={styles.workimageContainer} style={{ transform: `translate3d(calc(${container}% + 2vmin), 0px, 0px)` }}>
                {WORKIMAGES.map(({ key, image, title, text, framework, link }, index) =>
                    <div key={index} className={styles.workimagediv} onClick={() => getpreview({ image, title, text, framework, link })}>
                        <img src={image} alt={text} className={key === work ? cx(styles.workimage, styles.imageactive) : styles.workimage} />
                    </div>
                )}
            </div>
        </div>

        {/* controller */}
        <div className={styles.arrowleftright}>
            <a onClick={prevSlide}><IoMdArrowDropleftCircle /></a>
            <a onClick={nextSlide}><IoMdArrowDroprightCircle /></a>
        </div>

        {/* preview */}

        <div className={preview ? styles.preview : styles.nonpreview}>
            <img src={preimage} className={styles.previewjpg} />
            <h1>{title}<a href={prelink} target="_blank" rel="noreferrer" className={styles.linkExternal}><BiLinkExternal /></a></h1>

            <div className={styles.previewText}>
                <h3>Project Brief</h3>
                <p>{text}</p>
                <h3>Framework</h3>
                <p>{framework}</p>
            </div>

            <VscChromeClose className={styles.previewClose} onClick={() => setPreview(false)} />
        </div>

    </>
}
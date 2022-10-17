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
    const [work, setWork] = useState<number>(2);

    //image preview state
    const [preview, setPreview] = useState<boolean>(false);
    const [preimage, setPreimage] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [text, setText] = useState<string>();
    const [framework, setFramework] = useState<string>();
    const [prelink, setPrelink] = useState<string>();
    const [images, setImages] = useState<WorkImage[]>(WORKIMAGES);


    //image controller
    function nextSlide() {
        const moveItem = images.shift();
        // move item to last array
        const newImages = moveItem ? images.concat(moveItem) : images;
        setImages(newImages);

        setWork(work === WORKIMAGES.length ? 0 : work + 1)
    };

    function prevSlide() {
        const moveItem = images.pop();
        // move item to first array
        const newArray = [] as WorkImage[];
        moveItem && newArray.push(moveItem);
        const newImages = newArray.concat(images);
        setImages(newImages);

        setWork(work === 0 ? WORKIMAGES.length : work - 1)
    };

    //image preview
    function getpreview({ image, title, text, framework, link }: WorkImage) {
        setPreview(true)
        setPreimage(image)
        setTitle(title)
        setText(text)
        setFramework(framework)
        setPrelink(link)
    }


    return <>
        <h2>My Works</h2>

        {/* imageslide */}
        <div className={styles.workimageSlick}>
            <div className={styles.workimageContainer} >
                {images.map(({ key, image, title, text, framework, link }) =>
                    <div key={key} className={styles.workimagediv} onClick={() => getpreview({ image, title, text, framework, link })}>
                        <img src={image} alt={text} className={key === work ? cx(styles.imageactive, styles.workimage) : styles.workimage} />
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
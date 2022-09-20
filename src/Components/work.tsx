//styles
import styles from './component.module.scss'

//JSON
import WORKIMAGES from '../data/image'


import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'

export default function Work() {
    return <>
        <h2>My Works</h2>
        <div className={styles.workimageContainer}>
            {WORKIMAGES.map(({ image, text }, index) =>
                <div key={index} >
                    <img src={image} alt={text} className={styles.workimage} />
                </div>
            )}
        </div>
        <IoMdArrowDropleftCircle />
        <IoMdArrowDroprightCircle />
    </>
}
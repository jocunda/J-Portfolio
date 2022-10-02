//styles
import styles from './component.module.scss'
import cx from 'classnames'

export default function Feature() {
    return <>
        <div className={styles.featureContainer}>
            <div className={cx(styles.boxgrid, styles.firstbox)}>
                <p>Graphic Design</p>
            </div>
            <div className={cx(styles.boxgrid, styles.secondbox)}>
                <p>React</p>
            </div>
            <div className={cx(styles.boxgrid, styles.thirdbox)}>
                <p>3D</p>
            </div>
            <div className={cx(styles.boxgrid, styles.fourthbox)}>
                <p>CRUD</p>
            </div>
            <div className={cx(styles.boxgrid, styles.fifthbox)}>
                <p>Apps</p>
            </div>
            <div className={cx(styles.boxgrid, styles.sixthbox)}>
                <p>Illustration</p>
            </div>
        </div>

    </>
}
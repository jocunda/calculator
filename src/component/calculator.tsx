
import styles from './calculator.module.scss'
import cx from 'classnames'


export default function Calculator() {
    return <>
        <div className={styles.calculator}>
            <section className={styles.monitor}>
                <p>0</p>
            </section>
            <section className={styles.calcbtnContainer}>
                <button className={styles.btngrey}>AC</button>
                <button className={styles.btngrey}>-/+</button>
                <button className={styles.btngrey}>%</button>
                <button className={styles.btngrey}>/</button>
                <button className={styles.btndavygrey}>7</button>
                <button className={styles.btndavygrey}>8</button>
                <button className={styles.btndavygrey}>9</button>
                <button className={styles.btngrey}>*</button>
                <button className={styles.btndavygrey}>4</button>
                <button className={styles.btndavygrey}>5</button>
                <button className={styles.btndavygrey}>6</button>
                <button className={styles.btngrey}>-</button>
                <button className={styles.btndavygrey}>1</button>
                <button className={styles.btndavygrey}>2</button>
                <button className={styles.btndavygrey}>3</button>
                <button className={styles.btngrey}>+</button>
                <button className={cx(styles.btndavygrey, styles.btnzero)}>0</button>
                <button className={cx(styles.btndavygrey, styles.btndot)}>.</button>
                <button className={styles.btntotal}>=</button>
            </section>
        </div>
    </>
}

import styles from './calculator.module.scss'


export default function Calculator() {
    return <>
        <div className={styles.calculator}>
            <section>
                <p>0</p>
            </section>
            <section className={styles.calcbtnContainer}>
                <button className={styles.btngrey}>AC</button>
                <button className={styles.btngrey}>-/+</button>
                <button className={styles.btngrey}>%</button>
                <button className={styles.btngrey}>/</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className={styles.btngrey}>*</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className={styles.btngrey}>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className={styles.btngrey}>+</button>
                <button className={styles.btnzero}>0</button>
                <button className={styles.btndot}>.</button>
                <button>=</button>
            </section>
        </div>
    </>
}
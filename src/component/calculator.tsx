
import styles from './calculator.module.scss'
import cx from 'classnames'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useContext } from 'react'
import { LightModeContext } from './lightModeContext'

export default function Calculator() {
    const { lightMode, toogleLightMode } = useContext(LightModeContext);

    const handleClick = () => {
        toogleLightMode();
    }

    return <>
        <div className={lightMode ? cx(styles.lightcalculator, styles.calculator) : styles.calculator}>
            <section className={styles.theme} onClick={handleClick}>
                {lightMode ? <FiSun className={styles.lighticon} /> : <FiMoon />}
            </section>
            <section className={styles.monitor}>
                <p>0</p>
            </section>
            <section className={styles.calcbtnContainer}>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>AC</button>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>-/+</button>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>%</button>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>/</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>7</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>8</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>9</button>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>*</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>4</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>5</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>6</button>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>-</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>1</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>2</button>
                <button className={lightMode ? styles.btnred : styles.btndavygrey}>3</button>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>+</button>
                <button className={cx(lightMode ? styles.btnred : styles.btndavygrey, styles.btnzero)}>0</button>
                <button className={cx(lightMode ? styles.btnred : styles.btndavygrey, styles.btndot)}>.</button>
                <button className={lightMode ? cx(styles.btntotallight, styles.btntotal) : styles.btntotal}>=</button>
            </section>
        </div>
    </>
}
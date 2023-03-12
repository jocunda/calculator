
import styles from './calculator.module.scss'
import cx from 'classnames'
import { FiMoon, FiSun } from 'react-icons/fi'


import { useContext, useEffect, useState } from 'react'
import { LightModeContext } from './lightModeContext'

export default function Calculator() {
    // theme
    const { lightMode, toogleLightMode } = useContext(LightModeContext);
    const handleClick = () => {
        toogleLightMode();
    }

    //calculator
    const [inputNum, setInputNum] = useState<number>(0)
    const [monitor, setMonitor] = useState<number>(0);
    const [decimal, setDecimal] = useState<boolean>(false);
    const [decimalcount, setDecimalCount] = useState<number>(1);
    const [operator, setOperator] = useState<string>('');
    const [calculatednum, setCalculatednum] = useState<number>(0);

    useEffect(() => {
        setMonitor(inputNum);
    }, [inputNum])

    useEffect(() => {
        setMonitor(calculatednum);
    }, [calculatednum])

    //recieve number from input button
    const inputNumTotal = (num: number) => {
        if (decimal) {
            num = num / Math.pow(10, decimalcount);
            setDecimalCount(decimalcount + 1);
            setInputNum(parseFloat((inputNum + num).toFixed(decimalcount)))
        } else {
            setInputNum(inputNum * 10 + num)
        }

    }

    //receive operator from input button
    const inputOperator = (operator: string) => {
        setOperator(operator);
        calculate();
        setInputNum(0)
    }

    //calculate
    const calculate = () => {
        setDecimal(false);
        setDecimalCount(1)
        if (operator === '/' && inputNum === 0) {
            setCalculatednum(NaN);
            setInputNum(0)
            return
        }
        if (calculatednum === 0 && inputNum === 0) {
            return;
        }
        switch (operator) {
            case '+':
                setCalculatednum(calculatednum + inputNum);
                break;
            case '/':
                setCalculatednum(calculatednum / inputNum);
                break;
            case '*':
                setCalculatednum(calculatednum * inputNum);
                break;
            case '-':
                setCalculatednum(calculatednum - inputNum);
                break;
        }
        if (operator === '') setCalculatednum(inputNum);
        else setInputNum(0);
        return;
    }

    //get equation
    const equal = () => {
        calculate();
        setOperator('')
    }

    //clear all
    const clearall = () => {
        setInputNum(0);
        setCalculatednum(0);
        setMonitor(0);
        setOperator('')
    }

    return <>
        <div className={lightMode ? cx(styles.lightcalculator, styles.calculator) : styles.calculator}>
            <section className={styles.theme} onClick={handleClick}>
                {lightMode ? <FiSun className={styles.lighticon} /> : <FiMoon />}
            </section>
            <section className={styles.monitor}>
                {/* <p className={styles.prevmonitor}>{inputNum}</p> */}
                <p>{monitor}</p>
            </section>
            <section className={styles.calcbtnContainer}>
                <button onClick={clearall} className={lightMode ? styles.btnyellow : styles.btngrey}>AC</button>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>-/+</button>
                <button className={lightMode ? styles.btnyellow : styles.btngrey}>%</button>
                <button onClick={() => inputOperator('/')} className={lightMode ? styles.btnyellow : styles.btngrey}>/</button>
                <button onClick={() => inputNumTotal(7)} className={lightMode ? styles.btnred : styles.btndavygrey}>7</button>
                <button onClick={() => inputNumTotal(8)} className={lightMode ? styles.btnred : styles.btndavygrey}>8</button>
                <button onClick={() => inputNumTotal(9)} className={lightMode ? styles.btnred : styles.btndavygrey}>9</button>
                <button onClick={() => inputOperator('*')} className={lightMode ? styles.btnyellow : styles.btngrey}>*</button>
                <button onClick={() => inputNumTotal(4)} className={lightMode ? styles.btnred : styles.btndavygrey}>4</button>
                <button onClick={() => inputNumTotal(5)} className={lightMode ? styles.btnred : styles.btndavygrey}>5</button>
                <button onClick={() => inputNumTotal(6)} className={lightMode ? styles.btnred : styles.btndavygrey}>6</button>
                <button onClick={() => inputOperator('-')} className={lightMode ? styles.btnyellow : styles.btngrey}>-</button>
                <button onClick={() => inputNumTotal(1)} className={lightMode ? styles.btnred : styles.btndavygrey}>1</button>
                <button onClick={() => inputNumTotal(2)} className={lightMode ? styles.btnred : styles.btndavygrey}>2</button>
                <button onClick={() => inputNumTotal(3)} className={lightMode ? styles.btnred : styles.btndavygrey}>3</button>
                <button onClick={() => inputOperator('+')} className={lightMode ? styles.btnyellow : styles.btngrey}>+</button>
                <button onClick={() => inputNumTotal(0)} className={cx(lightMode ? styles.btnred : styles.btndavygrey, styles.btnzero)}>0</button>
                <button onClick={() => setDecimal(true)} className={cx(lightMode ? styles.btnred : styles.btndavygrey, styles.btndot)}>.</button>
                <button onClick={equal} className={lightMode ? cx(styles.btntotallight, styles.btntotal) : styles.btntotal}>=</button>
            </section>
        </div>
    </>
}
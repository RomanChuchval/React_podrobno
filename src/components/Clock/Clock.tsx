import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'


export const Clock = () => {

    const [digitalShow, setDigitalShow] = useState<boolean>(true)
    const [analogShow, setAnalogShow] = useState<boolean>(true)

    const handleClick = (clockType: string) => {
        clockType === 'digital'
            ? setDigitalShow(!digitalShow)
            : setAnalogShow(!analogShow)
    }

    const handleClickAll = () => {
        setDigitalShow(true)
        setAnalogShow(true)
    }


    return (
        <div className={s.clock_block}>
            <button onClick={() => handleClick('digital')} className={s.choose_clock_btn}>Show digital clock</button>
            <button onClick={() => handleClick('analog')} className={s.choose_clock_btn}>Show analog clock</button>
            <button onClick={handleClickAll} className={s.choose_clock_btn}>Show all clock</button>
            {digitalShow && <DigitalClock/>}
            {analogShow && <AnalogClock/>}
        </div>

    );
};


const DigitalClock = () => {
    let [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])

    const displayTime = (num: number) => num < 10 ? `0${num}` : num

    return (
        <div className={s.clock_container}>
            <div className={s.clock_digital}>
                <div>
                    {displayTime(date.getHours())} h :
                    {displayTime(date.getMinutes())} m :
                    {displayTime(date.getSeconds())} s
                </div>
            </div>
        </div>
    );
};

const AnalogClock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])

    return (
        <div className={s.clock}>
            <div
                className={s.hour_hand}
                style={{
                    transform: `rotateZ(${time.getHours() * 30}deg)`
                }}
            />
            <div
                className={s.min_hand}
                style={{
                    transform: `rotateZ(${time.getMinutes() * 6}deg)`
                }}
            />
            <div
                className={s.sec_hand}
                style={{
                    transform: `rotateZ(${time.getSeconds() * 6}deg)`
                }}
            />
            <span className={s.twelve}>12</span>
            <span className={s.one}>1</span>
            <span className={s.two}>2</span>
            <span className={s.three}>3</span>
            <span className={s.four}>4</span>
            <span className={s.five}>5</span>
            <span className={s.six}>6</span>
            <span className={s.seven}>7</span>
            <span className={s.eight}>8</span>
            <span className={s.nine}>9</span>
            <span className={s.ten}>10</span>
            <span className={s.eleven}>11</span>
        </div>
    );
};


import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffType = {
    callback?: () => void
    name?: string
}

type ActiveType = boolean
export const UncontrolledOnOff = (props: OnOffType) => {
    const [active, setActive] = useState<ActiveType>(false)
    const onClickHandler = (isActive: ActiveType) => {
        setActive(isActive)
    }
    const btnOn = s.btn + ' ' + (active ? s.btn_green : ' ')
    const btnOff = s.btn + ' ' + (!active ? s.btn_red : ' ')

    return (
        <div className={s.btn_wrapper}>
            <button className={btnOn} onClick={() => onClickHandler(true)}>ON</button>
            <button className={btnOff} onClick={() => onClickHandler(false)}>OFF</button>
            <Light active={active}/>
        </div>
    );
};

type LightType = {
    active: ActiveType
}
const Light = (props: LightType) => {
    return props.active
        ? <div className={s.light_green}>On</div>
        : <div className={s.light_red}>Off</div>
};





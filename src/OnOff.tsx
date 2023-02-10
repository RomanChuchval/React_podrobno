import React from 'react';
import s from './components/OnOff.module.css'

type OnOffType = {
    active: ActiveType
    setActive: (active: ActiveType) => void
}

export type ActiveType = boolean
export const OnOff = (props: OnOffType) => {

    const onClickHandler = (isActive: ActiveType) => {
        props.setActive(isActive)
    }
    const btnOn = s.btn + ' ' + (props.active ? s.btn_green : ' ')
    const btnOff = s.btn + ' ' + (!props.active ? s.btn_red : ' ')

    return (
        <div className={s.btn_wrapper}>
            <button className={btnOn} onClick={() => onClickHandler(true)}>ON</button>
            <button className={btnOff} onClick={() => onClickHandler(false)}>OFF</button>
            <Light active={props.active}/>
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





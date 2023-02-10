import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import {UncontrollAccordion} from "./components/UncontrollAccordion/UncontrollAccordion";
import {UncontrollRating} from "./components/UncontrollRating/UncontrollRating";
import {ActiveType, OnOff} from "./OnOff";
import {UncontrolledInput} from "./components/UncontrolledInput";
import {ControlledSelect} from "./components/ControlledSelect";


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [value, setValue] = useState<RatingValueType>(0)
    const [active, setActive] = useState<ActiveType>(false)

    return (
        <div className={'wrapper'}>
            <Rating value={value} setValue={setValue}/>
            <Accordion heading={'Controlled Accordion'} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <OnOff active={active} setActive={setActive}/>
            <UncontrolledOnOff/>
            <UncontrollAccordion />
            <UncontrollRating/>
            <UncontrolledInput />
            <ControlledSelect/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;

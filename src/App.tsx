import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff";
import {UncontrollAccordion} from "./components/UncontrollAccordion/UncontrollAccordion";
import {UncontrollRating} from "./components/UncontrollRating/UncontrollRating";


function App() {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [value, setValue] = useState<RatingValueType>(0)

    return (
        <div className={'wrapper'}>
            <Rating value={value}
                    setValue={setValue}
            />
            <Accordion heading={'Contorlled Accordion'}
                       collapsed={collapsed}
                       setCollapsed={setCollapsed}
            />
            <OnOff/>
            <UncontrollAccordion />
            <UncontrollRating/>

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

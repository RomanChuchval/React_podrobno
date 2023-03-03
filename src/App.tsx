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
import {CustomSelect} from "./components/CustomSelect/CustomSelect";
import {UseMemoContainer} from "./components/Memo/useMemo";
import {CounterWithBooks} from "./components/useCallback/CounterWithBooks";


function AppContainer() {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [value, setValue] = useState<RatingValueType>(0)
    const [active, setActive] = useState<ActiveType>(false)

    return (
        <div className={'wrapper'}>
            {/*<Rating value={value} setValue={setValue}/>*/}
            {/*<Accordion heading={'Controlled Accordion'} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            {/*<OnOff active={active} setActive={setActive}/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrollAccordion />*/}
            {/*<UncontrollRating/>*/}
            {/*<UncontrolledInput />*/}
            {/*<ControlledSelect/>*/}
            {/*<CustomSelect/>*/}
            <UseMemoContainer />
            <CounterWithBooks/>
        </div>
    );
}

const App = React.memo(AppContainer)

export default App;

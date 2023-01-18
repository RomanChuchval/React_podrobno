import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff";
import {UncontrollAccordion} from "./components/UncontrollAccordion/UncontrollAccordion";
import {UncontrollRating} from "./components/UncontrollRating/UncontrollRating";


function App() {
    return (
        <div className={'wrapper'}>
            {/*<PageTitle title={'This is APP Title'}/>*/}
            {/*<PageTitle title={'Hello TS!'}/>*/}
            {/*<Accordion heading={'First title'} collapsed={false}/>*/}
            {/*<Accordion heading={'Second title'} collapsed={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
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

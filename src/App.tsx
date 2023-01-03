import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from "./components/Rating/Rating";


function App() {
    return (
        <div>
            <PageTitle title={'This is APP Title'}/>
            <PageTitle title={'Hello TS!'}/>
            <Rating value={2}/>
            <Accordion heading={'First title'} collapsed={false}/>
            <Accordion heading={'Second title'} collapsed={false}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={1}/>
            <Rating value={5}/>
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

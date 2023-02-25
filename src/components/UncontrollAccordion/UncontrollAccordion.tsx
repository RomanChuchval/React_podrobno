import React, {useState} from 'react';
import s from './UncontrollAccordion.module.css'
const UncontrollAccordionContainer = () => {

    const [collapse, setCollapse]= useState<boolean>(false)
    let btnName = !collapse ? 'Show list' : 'Hide list'
    let listTitleText = !collapse ? 'Collapsed List' : 'Uncollapsed List'



    return (
        <div className={s.accordion_wrapper}>
            <button onClick={()=> setCollapse(!collapse)}>{btnName}</button>
            <AccordionTitle name={listTitleText}/>
            {collapse && <AccordionList/>}
        </div>
    );
};

export const UncontrollAccordion = React.memo(UncontrollAccordionContainer)

type AccordionTitleType = {
    name: string
}
const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <div>
            <h3>{props.name}</h3>
        </div>
    )
}

const AccordionList = () => {
    return (
        <div>
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
                <li>Fourth</li>
                <li>Fives</li>
            </ul>
        </div>
    )
}


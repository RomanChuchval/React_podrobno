import React from "react";

type AccordionPropsType = {
    heading: string,
    collapsed:boolean
    setCollapsed: (collapsed: boolean) => void
}
function Accordion(props: AccordionPropsType) {
        const setCollapsed = () => {
            props.setCollapsed(!props.collapsed)
        }
        return (
            <div>
                <AccordionTitle title={props.heading} setCollapsed={setCollapsed}/>
                {!props.collapsed && <AccordionBody/>}
            </div>

        )
    }

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {

    const onClickHandler = () => props.setCollapsed()


    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
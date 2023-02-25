import React from "react";

type AccordionPropsType = {
    heading: string,
    collapsed:boolean
    setCollapsed: (collapsed: boolean) => void
}
function AccordionContainer(props: AccordionPropsType) {
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

    const Accordion = React.memo(AccordionContainer)

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}
function AccordionTitleContainer(props: AccordionTitlePropsType) {

    const onClickHandler = () => props.setCollapsed()


    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
    )
}

const AccordionTitle = React.memo(AccordionTitleContainer)

function AccordionBodyContainer() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

const AccordionBody = React.memo(AccordionBodyContainer)

export default Accordion;
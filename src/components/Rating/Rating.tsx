import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
    value: RatingValueType
    setValue: (value: RatingValueType ) => void
}

function Rating(props: RatingPropsType) {

    const changeRatingValue = (value : RatingValueType) => {
        props.setValue(value)
    }

    return (
        <div>
            <Star value={1} selected={props.value > 0} changeRatingValue={changeRatingValue}/>
            <Star value={2} selected={props.value > 1} changeRatingValue={changeRatingValue}/>
            <Star value={3} selected={props.value > 2} changeRatingValue={changeRatingValue}/>
            <Star value={4} selected={props.value > 3} changeRatingValue={changeRatingValue}/>
            <Star value={5} selected={props.value > 4} changeRatingValue={changeRatingValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    changeRatingValue: (value : RatingValueType) => void
    value: RatingValueType
}

const Star = (props: StarPropsType) => {
    const onClickHandler = () => props.changeRatingValue(props.value)

    return <span onClick={onClickHandler}>{props.selected ? <b>star </b> : ' star' }</span>
}

export default Rating;
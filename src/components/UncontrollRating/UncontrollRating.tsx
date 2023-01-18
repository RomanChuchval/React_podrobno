import React, {useState} from 'react';
import s from './UncontrollRating.module.css'


export const UncontrollRating = () => {
    const [showRating, setShowRating] = useState<boolean>(true)

    let ratingName = showRating ? 'hide rating' : 'show rating'

    return (
        <div className={s.rating_wrapper}>
            <button onClick={() => setShowRating(!showRating)}>{ratingName}</button>
            <RatingTitle/>
            {showRating && <RatingStars/>}
        </div>
    );
};

const RatingTitle = () => {
    return (
        <div>
            <h3>Rating</h3>
        </div>
    )
}

const RatingStars = () => {

    const [value, setValue] = useState<number>(0)
    const onClickHandler = (value: number) => {
        setValue(value)
    }


    return (
        <div className={s.stars_wrapper}>
            <Star checked={value >= 1} id={1} onClickHandler={onClickHandler}/>
            <Star checked={value >= 2} id={2} onClickHandler={onClickHandler}/>
            <Star checked={value >= 3} id={3} onClickHandler={onClickHandler}/>
            <Star checked={value >= 4} id={4} onClickHandler={onClickHandler}/>
            <Star checked={value >= 5} id={5} onClickHandler={onClickHandler}/>
        </div>
    )
}

type StarType = {
    id: number
    onClickHandler: (value: number) => void
    checked: boolean
}

const Star = (props: StarType) => {

    const callback = () => {
        props.onClickHandler(props.id)
    }
    let starStyle = s.star + ' ' + (props.checked ? s.star_checked : '' )

    return (
        <div onClick={callback} className={starStyle}></div>
    )
}

// const RatingStars = () => {
//     const [checked, setChecked] = useState<number>(0)
//     const onClickHandler = (count: number) => {
//         setChecked(count)
//     }
//     let starStyle = s.star
//     let checkedStarStyle = s.star + ' ' + s.star_checked
//     return (
//         <div className={s.stars_wrapper}>
//             <div onClick={()=>onClickHandler(1)} className={checked >= 1? checkedStarStyle : starStyle }></div>
//             <div onClick={()=>onClickHandler(2)} className={checked >= 2? checkedStarStyle : starStyle }></div>
//             <div onClick={()=>onClickHandler(3)} className={checked >= 3? checkedStarStyle : starStyle }></div>
//             <div onClick={()=>onClickHandler(4)} className={checked >= 4? checkedStarStyle : starStyle }></div>
//             <div onClick={()=>onClickHandler(5)} className={checked >= 5? checkedStarStyle : starStyle }></div>
//         </div>
//     )
// }

import React, {memo} from "react";
import {SelectOptionType} from "./useMemo";

type SelectPropsType = {
    options: SelectOptionType[]
}
export const Select: React.FC<SelectPropsType> = ({options}) => {
    console.log('Select rendered')
    return (
        <div>
            <select>
                {options.map(el => (<option key={el.city}>
                    Country: {el.country}. City: {el.city}. Population: {el.population}
                </option>))}
            </select>
        </div>
    )
}

export const SelectContainer = memo(Select)

// function arePropsEqual(oldProp: SelectPropsType, newProp: SelectPropsType) {
//     return (
//         oldProp.options.length === newProp.options.length &&
//         oldProp.options.every((oldPoint, index) => {
//             const newPoint = newProp.options[index];
//             return oldPoint.city === newPoint.city
//                 && oldPoint.country === newPoint.country
//                 &&oldPoint.population === newPoint.population;
//         })
//     )
// }


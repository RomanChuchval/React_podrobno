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



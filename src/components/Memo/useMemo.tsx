import React, {useMemo, useState} from 'react';
import {SelectContainer} from "./Select";


export type SelectOptionType = {
    country: string
    city: string
    population: number
}
const UseMemo = () => {

    const [state, setState] = useState<Array<SelectOptionType>>([
        {country: 'Belarus', city: 'Minsk', population: 11},
        {country: 'Belarus', city: 'Brest', population: 5},
        {country: 'Ukraine', city: 'Kiev', population: 20},
        {country: 'Ukraine', city: 'Lviv', population: 7},
        {country: 'USA', city: 'New-york', population: 33},
        {country: 'Canada', city: 'Vankoover', population: 24},
        {country: 'Russia', city: 'Moscow', population: 15},
        {country: 'Belarus', city: 'Baranovichi', population: 5},
        {country: 'USA', city: 'Texas', population: 9},
        {country: 'Canada', city: 'Toronto', population: 3},
    ])
    const [count, setCount] = useState<number>(0)


    const filteredByUSA = useMemo(() => {
        // debugger
        return state.filter(el => el.country === 'USA')
    }, [state])

    const filteredByPopulation = useMemo(() => {
        // debugger
        return state.filter(el => el.population >= 10)
    }, [state])

    const filteredByBelarus = useMemo(() => {
        return state.filter(el => el.country === 'Belarus')
    }, [state])


    return (
        <>
            <div>
                {count}
                <button onClick={() => {
                    setCount(count + 1)
                }}>+
                </button>
            </div>
            <div>
                <button onClick={() => {
                    setState([...state, {country: 'Belarus', city: 'Mosty', population: 1}])
                }}>+
                </button>
            </div>

            <SelectContainer options={filteredByUSA}/>

            <SelectContainer options={filteredByPopulation}/>

            <SelectContainer options={filteredByBelarus}/>
        </>
    );
};
export const UseMemoContainer = React.memo(UseMemo)


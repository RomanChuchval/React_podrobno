import React, {ChangeEvent, useState} from 'react';

export const ControlledSelect = () => {
    const [selected, setSelected] = useState<string | undefined>(undefined)

const onChangeSelectHandler =(e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.currentTarget.value)
    console.log(e)
}
    return (
        <div>
            {selected}
            <select value={selected} onChange={onChangeSelectHandler}>
                <option value={'1'}>React value 1</option>
                <option value={'2'}>Redux value 2</option>
                <option value={'3'}>JS value 3</option>
                <option value={'4'}>JS value 4</option>
                <option value={'5'}>JS value 5</option>
            </select>
        </div>
    );
};


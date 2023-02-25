import React, {useRef, useState} from 'react';

const UncontrolledInputContainer = () => {

    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onSave = () => {
        let inputData = inputRef.current as HTMLInputElement
        setValue(inputData.value)
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={onSave}>Save</button>
            Value at useState: {value}
        </div>
    );
};

export const UncontrolledInput = React.memo(UncontrolledInputContainer)


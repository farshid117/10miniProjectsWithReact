import { useState } from 'react';

const useInput = (init) => {
    const [value, setValue] = useState(init)

    const binding = {
        value: value,
        onChange: (event) => {
            setValue(event.target.value)
        }
    }

    const resetValue = () => {
        setValue("")
    }

    return [ binding, resetValue]   

}

export default useInput;

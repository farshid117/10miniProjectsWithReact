import { useState, useEffect } from "react";


const useLocalStorage = () => {
    const [value, setValue] = useState(() => {
        let localData = localStorage.getItem("keyCustomHook")
        if(localData) return localData
        
        return ""
    })

    useEffect(() => {
        localStorage.setItem("keyCustomHook", value)
    },[value])

    return [value, setValue]
}

export default useLocalStorage;

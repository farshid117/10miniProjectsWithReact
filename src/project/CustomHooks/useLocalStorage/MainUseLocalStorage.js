import { useEffect, useRef } from 'react';

import useLocalStorage from "./UseLocalStorage"
import Grid from '@mui/material/Unstable_Grid2';

const MainUseLocalStorage = () => {
    const [value, setValue] = useLocalStorage()
    const inputRef = useRef(null) 
    //? useRef can be initialized with two approach: Ref & initialize value
    //? inputtRef is Object with current as only Property
    //? useRef is very similar to querySelector & getElementById in javaScript to Access Dom Element
    
    useEffect(() =>{
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <Grid container display="flex" justifyContent="center" sx={{height: {xs:"40vh", md:"50vh"}}} >
                <Grid xs={8} md={6} display="flex" alignItems="center"  className="h-100" >

                    <input
                        ref={inputRef}
                        type="text"
                        className='form-control'
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />

                </Grid>
            </Grid>
        </div>
    );
}

export default MainUseLocalStorage;

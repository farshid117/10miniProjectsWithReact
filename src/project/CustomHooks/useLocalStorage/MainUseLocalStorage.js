import { useEffect, useRef } from 'react';

import useLocalStorage from "./UseLocalStorage"
import Grid from '@mui/material/Unstable_Grid2';

const MainUseLocalStorage = () => {
    const [value, setValue] = useLocalStorage()
    const inputRef = useRef(null)
    
    useEffect(() =>{
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <Grid container display="flex" justifyContent="center" >
                <Grid xs={8} md={6}  >

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

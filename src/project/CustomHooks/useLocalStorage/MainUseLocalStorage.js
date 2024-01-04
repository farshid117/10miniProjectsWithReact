import React from 'react';

import useLocalStorage from "./UseLocalStorage"
import Grid from '@mui/material/Unstable_Grid2'; 

const MainUseLocalStorage = () => {
    const [value, setValue] = useLocalStorage() 
    return (
        <div>
            <Grid container display="flex" justifyContent="center" >
                <Grid xs={6}  >
                    
                        <input
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

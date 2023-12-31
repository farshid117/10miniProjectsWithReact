import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const MainCustomeHook = () => {
    return ( 
        <>
           <Grid container>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center" gap={1} marginTop={2}
                     sx={{flexDirection: {xs:"column", md: 'row'},}}
                >
                    <Button variant="contained" component={Link} to="usefetch" color="success" >
                            useFetch
                        </Button>
                        <Button variant="contained" component={Link} to="uselocalstorage">
                            useLocalStorage
                        </Button>
                        <Button variant="contained" component={Link} to="useinput" color="warning">
                            useInput
                        </Button>
                </Grid>
                <Grid xs={12} marginTop={3}>
                    <Outlet/>
                </Grid>
           </Grid>
        </>
     );
}
 
export default MainCustomeHook;
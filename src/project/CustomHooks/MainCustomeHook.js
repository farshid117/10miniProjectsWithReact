import { Button, Stack } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Link, Outlet } from "react-router-dom";

const MainCustomeHook = () => {
    return ( 
        <>
           <Grid container>
                <Grid xs={12} display="flex" justifyContent="center" marginTop={2}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" component={Link} to="usefetch">
                            useFetch
                        </Button>
                        <Button variant="contained" component={Link} to="uselocalstorage">
                            useLocalStorage
                        </Button>
                    </Stack>
                </Grid>
                <Grid xs={12} marginTop={3}>
                    <Outlet/>
                </Grid>
           </Grid>
        </>
     );
}
 
export default MainCustomeHook;
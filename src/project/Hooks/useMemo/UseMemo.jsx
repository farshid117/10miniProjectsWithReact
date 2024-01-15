import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
const UseMemo = () => {
    return (
        <>
            <Grid container>
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center" gap={1} marginTop={2}
                    sx={{ flexDirection: { xs: "column", md: 'row' }, }}
                >
                    <Button variant="contained" component={Link} to="example1" color="success" >
                        example1
                    </Button>
                    <Button variant="contained" component={Link} to="example2">
                        example2
                    </Button>
                    <Button variant="contained" component={Link} to="/hooks" color="error">
                        Exit
                    </Button>
                </Grid>
                <Grid xs={12} marginTop={3}>
                    <Outlet />
                </Grid>
            </Grid>
        </>
    );
}

export default UseMemo;

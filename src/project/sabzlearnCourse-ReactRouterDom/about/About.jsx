import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h3 className="text-center mt-3 mb-3 text-white">درباره ما</h3>
            <div className="text-center">
                <Button variant="contained" sx={{mr:2}}>
                    <Link to="dashboard" >داشبورد</Link>
                </Button>
               
                <Link to="setting" className="btn btn-primary" >تنظیمات</Link>
        
            </div>

            <Outlet /> {/* Doshboard or Setting Component */}
        </div>

    );
}

export default About;

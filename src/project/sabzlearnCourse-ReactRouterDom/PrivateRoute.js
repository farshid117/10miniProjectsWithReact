import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "./utils";

const PrivateRoute = ({children}) => {
    let isLoginUser = isLogin("ali")
    return (
        <div>
            {
                isLoginUser ? (
                     <Outlet /> 
                ) : (
                    <Navigate to="/rrd/login" />
                )
            }
        </div>
    );
}

export default PrivateRoute;

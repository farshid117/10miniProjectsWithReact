import { Outlet } from 'react-router-dom';
import Header from './Header'
const MainCourse = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default MainCourse;

import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header'
import "./MainCourse.css"

const MainCourse = () => {
    const {pathname} = useLocation()

    return (
        <>
            <Header />
            {
                pathname === "/rrd" ?
                <p p className='header-text text-center text-white'>مینی پروژه دوره های آموزشی</p>
                    : <Outlet />
            }
        </>
    );
}

export default MainCourse;

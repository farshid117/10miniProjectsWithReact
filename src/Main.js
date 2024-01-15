import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Avatar } from '@mui/material';

import "./Main.css"

const Main = () => {
    return (
        <div className='MainCourse  text-center '>
            <Helmet>
                <title>10 مینی پروژه ری اکت</title>
            </Helmet>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className='col-10 col-md-8 col-lg-6 d-flex flex-column'>
                        <p className='h1 text-center mt-3' >فهرست <span className='text-warning fw-bold'>پروژ‌ه‌های من</span></p>
                        <div className='d-flex justify-content-center my-3'>
                            <Avatar alt="khodam" src={require("./assets/img/khodam.png")}
                                    sx={{ width: 130, height: 130, border: "3px solid #fff", }}
                            />
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center">
                        <div className='col-10 col-md-8 col-lg-6 d-flex flex-column'>
                            <NavLink to="/practice" className={({isActive})=> isActive? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>فصل 1 تا 8 </NavLink>
                            <NavLink to="/shoprefactor" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>Shopping Project</NavLink>
                            <NavLink to="/todolistrefactor" className={({ isActive }) => isActive ?'btn btn-danger mb-2':'btn btn-primary mb-2'}>TodoList Project</NavLink>
                            <NavLink to="/NoteApp" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>NoteApp Project</NavLink>
                            <NavLink to="/Ticket" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>Ticket Project</NavLink>
                            <NavLink to="/AddBook" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>BookListApp Project</NavLink>
                            <NavLink to="/Login2" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>LoginPage Project</NavLink>
                            <NavLink to="/rrd" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>courses project with react-router-dom</NavLink>
                            <NavLink to="/cmsproject" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>10 : CmsProject</NavLink>
                            <NavLink to="/customhooks" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>11 : Custome Hooks</NavLink>
                            <NavLink to="/hooks" className={({ isActive }) => isActive ? 'btn btn-danger mb-2':'btn btn-primary mb-2'}>12 : useMemmo & useCallback</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'

import './AppTen.css'

export default function AppTen() {

    return (
        <>
            <div className='AppTen'>
                <Helmet>
                    <title>پنل مدیریت | 10 مینی پروژه ری‌اکت</title>
                </Helmet>
                <Topbar />
                <div>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-2">
                            <Sidebar />
                        </div>

                        <div className="col-md-9 col-lg-9 col-xl-10">
                            <Outlet /> {/* in base of routes can be: Home, Users, newUser, Product */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



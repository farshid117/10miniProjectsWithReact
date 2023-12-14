import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { Col, Row } from "react-bootstrap";

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
                <Row>
                    <Col xs={12}>
                        <Topbar />
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col md={3} xl={2}>
                            <Sidebar />
                        </Col>

                        <Col md={9} xl={10}>
                            <Outlet /> {/* in base of routes can be: Home, Users, newUser, Product */}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}



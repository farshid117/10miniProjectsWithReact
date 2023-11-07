import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
//todo:  Material UI Component
import { Typography, Box, Container, Button } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Login, FetchApi, TodoListRefactor, ShopRefactor } from './project';
import {
        LoadingButton, ToggleButtonExample,
        AlertBasic, AlertLinks, AlertAdditionalContent, AlertDismissing,
        CardBasic, CardBodyDetails, CardListGroup, CardWithBackgroundColor, CardImgOverlay, CardTabs,
        ModalBasic, ModalWithFormFocus,
        NavbarBasic, NavbarScrollableinMobileSize} from './components';

import "./Practice.css"

const Practice = () => {
    const [colors] = useState(["primary", "danger", "info", "warning"])
    const [columns] = useState([
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'Action',
            headerName: 'action',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 200,
            renderCell: (params) => (

                <div className='d-flex justify-content-evenly w-100 ' style={{ border: "none" }}>
                    <Button variant="contained" component="span" >
                        <EditIcon />
                    </Button>
                    <Button variant="contained" color='error' component="span" >
                        <DeleteIcon />
                    </Button>
                </div>
            )


        },
    ])
    const [rows] = useState([
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ])
    return (
        <div className='Practice mt-3'>
           
            <Helmet>
                <title>کامپوننت‌های کاربردی | ری‌اکت-بوت استرپ</title>
            </Helmet>
            {/* todo: Alerts */}
            <h2 className='text-center fw-bold textShadow'>Alerts Section</h2>
            <AlertBasic />
            <AlertLinks />
            <AlertAdditionalContent />
            <AlertDismissing />

            <hr />
            {/* todo: Buttons */}
            <h2 className='text-center fw-bold textShadow'>Buttons Section</h2>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center">
                        <LoadingButton />
                        <ToggleButtonExample />
                    </div>
                </div>
            </div>

            <hr />
            {/* todo: Cards */}
            <h2 className='text-center fw-bold textShadow'>Cards Section</h2>
            <div className="container">
                <div className="row gx-2 justify-content-center">
                    <div className="col-md-3  ">
                        <h5 className='text-center'>CardBasic</h5>
                        <CardBasic />
                    </div>
                    <div className="col-md-3  ">
                        <h5 className='text-center'>CardBodyDetails</h5>
                        <CardBodyDetails />
                    </div>
                    <div className="col-md-3  ">
                        <h5 className='text-center'>CardListGroup</h5>
                        <CardListGroup />
                    </div>
                    <div className="col-md-3">
                        <h5 className='text-center'>CardWithBackgroundColor</h5>
                        <CardWithBackgroundColor variant="warning" />
                    </div>
                    <div className="col-md-8 mt-3 ">
                        <h5 className='text-center'>CardImgOverlay</h5>
                        <CardImgOverlay />
                    </div>
                    <div className="col-md-10 mt-5 mb-5">
                        <h5 className='text-center'>CardTabs</h5>
                        <CardTabs />
                    </div>
                    {
                        colors.map((color) => (

                            <CardWithBackgroundColor key={color} variant={color} />
                        ))
                    }
                </div>
            </div>

            <hr />

            {/* todo: Modals */}
            <h2 className='text-center fw-bold textShadow'>Modals Section</h2>
            <ModalBasic />
            <ModalWithFormFocus />

            <hr />

            {/* todo: Navbars */}
            <h2 className='text-center fw-bold textShadow'>Navbars Section</h2>
            <NavbarBasic />
            <NavbarScrollableinMobileSize />

            <hr />

            {/* todo: LoginPage Project */}

            <h2 className='text-center fw-bold textShadow'>Login page Project with React-Bootstrap</h2>
            <Login />

            <hr />

            {/* todo: FetchApi from jsonplaceholder.com */}
            <h2 className='text-center fw-bold textShadow'>Feth Api From jsonplaceholder.com in show in Table</h2>
            <FetchApi />

            <hr />
            <TodoListRefactor />

            <hr />
            <ShopRefactor />

            <hr />
            <Typography align='center' variant='h5' display='block' >سلام من MUI هستم</Typography>
            <Container sx={{ background: "#fff" }} >
                <Box sx={{ height: 400, width: '100%', color: "white", mt: 5 }} >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick

                    />
                </Box>
            </Container>

        </div>
    );
}

export default Practice;

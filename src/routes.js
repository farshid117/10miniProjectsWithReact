import { Navigate } from 'react-router-dom';

import {
    Courses, CourseDetail, About, Dashboard, Setting, LoginForm, Panel,
    PrivateRoute, Users, MainCourse, ShopRefactor, TodoListRefactor, NoteApp, Ticket,
    AddBook, Login2, AppTen, MainCustomeHook
} from './project';
import Practice from './practice';
import Main from './Main';
import {
    Home,
    UserDetails,
    UserList,
    NewUser,
    Products,
    ProductDetails,
    NotFound
} from "./project/EnglishCsmProject/pages"

import { MainUseFetch, MainUseInput, MainUseLocalStorage } from './project/CustomHooks';

export let routes = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/practice',
        element: <Practice />
    },
    /* Nested Route */
    {
        path: '/rrd',
        element: <MainCourse />,
        children: [

            { path: 'courses', element: <Courses /> },
            { path: 'courses/:courseId', element: <CourseDetail /> },
            {
                path: 'about', element: <About />,
                children: [
                    { path: 'dashboard', element: <Dashboard /> },
                    { path: 'setting', element: <Setting /> },
                ]
            },
            { path: 'login', element: <LoginForm /> },
            { path: 'users', element: <Users /> },
            {
                path: '*', element: <PrivateRoute />,
                children: [
                    { path: "panel", element: <Panel /> },
                    { path: "ali", element: <p className='fw-bold mt-5 text-center text-light'>پسر خوب یه مسیر درست وارد کن</p> },
                ]
            },
        ]
    },
    { path: '/shoprefactor', element: <ShopRefactor /> },
    { path: '/todolistrefactor', element: <TodoListRefactor /> },
    { path: '/NoteApp', element: <NoteApp /> },
    { path: '/Ticket', element: <Ticket /> },
    { path: '/AddBook', element: <AddBook /> },
    { path: '/Login2', element: <Login2 /> },

    /* todo: Routes of Dashboard Panel(CMS) Project */
    {
        path: '/cmsproject', element: <AppTen />,
        children: [
            { path: '', element: <Navigate to="home" /> },
            { path: 'home', element: <Home /> },
            { path: 'users', element: <UserList />, },
            { path: 'users/edit/:id', element: <UserDetails /> },
            { path: 'newUser', element: <NewUser /> },
            { path: 'products', element: <Products /> },
            { path: 'products/edit/:id', element: <ProductDetails /> },
            { path: '*', element: <NotFound /> },
        ]
    },
    /* todo: Routes of Custom Hooks */
    {
        path: '/customhooks', element: <MainCustomeHook />,
        children: [
            { path: 'usefetch', element: <MainUseFetch /> },
            { path: 'uselocalstorage', element: <MainUseLocalStorage />, },
            { path: 'useinput', element: <MainUseInput />, },

            { path: '*', element: <NotFound /> },
        ]
    },



]


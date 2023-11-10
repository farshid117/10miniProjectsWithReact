import {
    Courses, CourseDetail, About, Dashboard, Setting, LoginForm, Panel,
    PrivateRoute, Users, Header, ShopRefactor, TodoListRefactor, NoteApp, Ticket,
    AddBook, Login2, AppTen
} from './project';
import Practice from './practice';
import Main from './Main';
import Home from './project/EnglishCsmProject/pages/home/Home';
import UserDetails from './project/EnglishCsmProject/pages/Users/UserDetails';
import UserList from './project/EnglishCsmProject/pages/Users/UserList';
import NewUser from './project/EnglishCsmProject/pages/NewUser/NewUser';
import Products from './project/EnglishCsmProject/pages/Products/Products';
import ProductDetails from './project/EnglishCsmProject/pages/Products/ProductDetails';

let routes = [
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
        element: <Header />,
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
            { path: '*', element: <Home /> },
            { path: 'users', element: <UserList />, },
            { path: 'users/edit/:id', element: <UserDetails /> },
            { path: 'newUser', element: <NewUser /> },
            { path: 'products', element: <Products /> },
            { path: 'products/edit/:id', element: <ProductDetails /> },
        ]
    },


]

export default routes
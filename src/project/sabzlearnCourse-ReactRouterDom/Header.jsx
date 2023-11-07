import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem,
    ListItemButton, Menu, Toolbar, Typography, Button } from '@mui/material';


import "./Header.css"

const drawerWidth = 240;


const Header = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                بیمه آنلاین
            </Typography>
            <Divider />
            <List>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <NavLink to="/" style={({ isActive }) => ({ marginRight: 0, fontSize: 17, padding: isActive ? "5px 10px 5px 10px" : null, borderRadius: "10px", background: isActive ? "red" : null })}>خانه</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>

                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <NavLink to="courses" style={({ isActive }) => ({ marginRight: 0, fontSize: 17, padding: isActive ? "5px 10px 5px 10px" : null, borderRadius: "10px", background: isActive ? "red" : null })}>دوره‌ها</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <NavLink to="about" style={({ isActive }) => ({ marginRight: 0, fontSize: 17, padding: isActive ? "5px 10px 5px 10px" : null, borderRadius: "10px", background: isActive ? "red" : null })}>درباره‌ما</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <NavLink to="login" style={({ isActive }) => ({ marginRight: 0, fontSize: 17, padding: isActive ? "5px 10px 5px 10px" : null, borderRadius: "10px", background: isActive ? "red" : null })}>ورود</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <NavLink to="panel" style={({ isActive }) => ({ marginRight: 0, fontSize: 17, padding: isActive ? "5px 10px 5px 10px" : null, borderRadius: "10px", background: isActive ? "red" : null })}>پنل کاربری</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <Dropdown>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                فایربیس پروگ
                            </Dropdown.Toggle>
                        </ListItemButton>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ListItem>

            </List>
        </Box>
    );
    return (
        <div className='HeaderCourse' >
            <Helmet>
                <title>نمایش دوره‌ها | 10 مینی پروژه ری‌اکت</title>
            </Helmet>
            <Box sx={{ display: 'sticky' }}>
                <CssBaseline />
                <AppBar position="sticky" >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <Menu /> {/* MenuIcon */}
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ mr: 5, display: { xs: 'none', md: 'block' }, fontSize: 25, fontWeight: "Bold" }}
                        >
                            بیمه آنلاین
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>

                            <Button>
                                <NavLink to="/"
                                    style={({ isActive }) => ({ marginRight: 20, color: "#fff", fontSize: 17, padding: "5px 10px", borderRadius: "10px", background: isActive ? "red" : null })}>
                                    خانه
                                </NavLink>
                            </Button>
                            <Button>
                                <NavLink to="courses" style={({ isActive }) => ({ marginRight: 20, color: "#fff", fontSize: 17, padding: "5px 10px", borderRadius: "10px", background: isActive ? "red" : null })}>دوره‌ها</NavLink>
                            </Button>
                            <Button>
                                <NavLink to="about" style={({ isActive }) => ({ marginRight: 20, color: "#fff", fontSize: 17, padding: "5px 10px", borderRadius: "10px", background: isActive ? "red" : null })}>درباره‌ما</NavLink>
                            </Button>
                            <Button>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        فایربیس پروگ
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <div>
                                            <Dropdown.Item>
                                                <NavLink to="login" style={({ isActive }) => ({ marginRight: 0, color: "#000", fontSize: 17, padding: "5px 10px", borderRadius: "10px", background: isActive ? "red" : null })}>ورود</NavLink>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item>
                                                <NavLink to="users" style={({ isActive }) => ({ marginRight: 0, color: "#000", fontSize: 17, padding: "5px 10px", borderRadius: "10px", background: isActive ? "red" : null })}>لیست کاربران</NavLink>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item>
                                                <NavLink to="sales" style={({ isActive }) => ({ marginRight: 0, color: "#000", fontSize: 17, padding: "5px 10px", borderRadius: "10px", background: isActive ? "red" : null })}>لیست سفارشات</NavLink>
                                            </Dropdown.Item>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Button>

                            <Button>

                                <NavLink to="panel" style={({ isActive }) => ({ marginRight: 20, color: "#fff", fontSize: 17, padding: "5px 10px", borderRadius: "10px", background: isActive ? "red" : null })}>پنل کاربری</NavLink>
                            </Button>

                        </Box>
                    </Toolbar>
                </AppBar>
                
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

            </Box>

            <Outlet />
        </div>
    );
}

export default Header;








import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { Col, Row } from "react-bootstrap";

import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";

import khodam from "../../../../assets/img/khodam.png"

import "./Topbar.css";

const drawerWidth = 200;

export default function Topbar() {
  const matches = useMediaQuery('(min-width:768px)');
  console.log("matches: ", matches);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (matches) setDrawerOpen(false);
  }, [matches])

  const sidebarDrawr = (
    <div className="sidebar mt-5" >
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">داشبورد</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active" >
              <NavLink to="home" className="link" style={({ isActive }) => {
                return {
                  display: "block",
                  backgroundColor: isActive ? "rgb(121,180,255)" : "",
                  borderRadius: 10
                }
              }}>
                <LineStyleIcon className="sidebarIcon" />
                خانه
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              آنالیز و گزارش
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              میزان فروش
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">منوی سریع</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink to="users" className="link" style={({ isActive }) => {
                return {
                  display: "block",
                  backgroundColor: isActive ? "rgb(121,180,255)" : "",
                  borderRadius: 10
                }
              }}>
                <PermIdentityIcon className="sidebarIcon" />
                لیست یوزرها
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="newUser" className="link" style={({ isActive }) => {
                return {
                  display: "block",
                  backgroundColor: isActive ? "rgb(121,180,255)" : "",
                  borderRadius: 10
                }
              }}>
                <PermIdentityIcon className="sidebarIcon" />
                ایجاد یوزر جدید
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="products" className="link" style={({ isActive }) => {
                return {
                  display: "block",
                  backgroundColor: isActive ? "rgb(121,180,255)" : "",
                  borderRadius: 10
                }
              }}>
                <StorefrontIcon className="sidebarIcon" />
                محصولات
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              تراکنش‌ها
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              گزارشات
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">اعلانات</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              پست‌ها
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              بازخوردها
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              پیام ها
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">وظایف</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              مدیریت
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              گزارشات مالی
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              اخبار
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  return (
    <div className="topbar">
      <div className="topbarWrapper2">
        <div className="px-3 position-relative">

          <Row className="align-items-center w-100 justify-content-center justify-content-md-end ">
            <Col xs={12} md={6} className="">
              <div className="topLeft text-center text-md-start mt-2 mt-md-0">
                <Link to="/" className="logo"><span className="text-danger">❤</span> AliCoder </Link>
              </div>
            </Col>

            <Col md={6} className="d-none d-md-block">
              <div className="topRight">
                <div className="topbarIconContainer">
                  <NotificationsIcon />
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <LanguageIcon />
                  <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                  <SettingsIcon />
                </div>
                <div >
                  <img src={khodam} className="topAvatar ms-1" alt="khodam" />
                </div>
              </div>
            </Col>

            <div className="position-absolute d-md-none" style={{ top: 3, right: 20, zIndex: 100000, color: "#000" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 0, }}
              >
                <MenuIcon sx={{ fontSize: 30 }} />
              </IconButton>

            </div>
          </Row>

        </div>
      </div>
      {/* todo: Drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClick={handleDrawerToggle}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
          zIndex: 0,
        }}
      >

        {sidebarDrawr}

      </Drawer>

    </div>
  );
}

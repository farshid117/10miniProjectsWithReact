import React from "react";
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
// import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";

import { NavLink } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar d-none d-md-block" style={{ width: "200px" }}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">داشبورد</h3>
          <ul className="sidebarList">
            <NavLink to="home" className="link" style={({ isActive }) => {
              return {
                width: "100%",
                height: "100%",
                p: "10px",
                display: "block",
                backgroundColor: isActive ? "#bd93f9" : "",
                borderRadius: 5
              }
            }}>
              <li className="sidebarListItem active" >
                <LineStyleIcon className="sidebarIcon" />
                خانه
              </li>
            </NavLink>
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
            <NavLink to="users" className="link" style={({ isActive }) => {
              return {
                display: "block",
                backgroundColor: isActive ? "rgb(121,180,255)" : "",
                borderRadius:5
              }
            }}>
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                کاربران
              </li>
            </NavLink>
            <NavLink to="newUser" className="link" style={({ isActive }) => {
              return {
                display: "block",
                backgroundColor: isActive ? "rgb(121,180,255)" : "",
                borderRadius:5
              }
            }}>
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                کاربر جدید
              </li>
            </NavLink>
            <NavLink to="products" className="link" style={({ isActive }) => {
              return {
                display: "block",
                backgroundColor: isActive ? "rgb(121,180,255)" : "",
                borderRadius: 5
              }
            }}>
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                محصولات
              </li>
            </NavLink>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              تراکنش‌های مالی
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
              ایمیل
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarIcon" />
              فیسبوک
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              پیام‌ها
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
              آنالیز و تحلیل
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              سایر گزارشات
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

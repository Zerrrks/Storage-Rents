/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import LocationOne from "views/Maps/LocationOne.js";
import LocationTwo from "views/Maps/LocationTwo.js";
import LocationThree from "views/Maps/LocationThree.js";
import LocationFour from "views/Maps/LocationFour.js";
import LocationFive from "views/Maps/LocationFive.js";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import UserStorage from "views/UserStorage/UserStorage.js";
//import TableList from "views/TableList/TableList.js";
//import UserLogins from "views/Logins/UserLogins";
//import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import login from "views/loginPage/login";
//import NotificationsPage from "views/Notifications/Notifications.js";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.js";



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: Person,
    component: login,
    layout: "/admin",
  },
  
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  { path: "/storage",
    name: "User Storage",
    icon: "content_paste",
    component: UserStorage,
    layout: "/admin",
  },
  /*{ path: "/login",
    name: "User login",
    icon: "content_paste",
    component: UserLogins,
    layout: "/admin",
  },
  /*{
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
 /* {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },*/
  {
    path: "/icons",
    name: "Locations",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  // These routes are for redirection from the Maps page. Keep them last so we don't get random blank space in the sidebar.
  {
    path: "/locationone",
    name: "",
    icon: "",
    component: LocationOne,
    layout: "/admin",
  },
  {
    path: "/locationtwo",
    name: "",
    icon: "",
    component: LocationTwo,
    layout: "/admin",
  },
  {
    path: "/locationthree",
    name: "",
    icon: "",
    component: LocationThree,
    layout: "/admin",
  },
  {
    path: "/locationfour",
    name: "",
    icon: "",
    component: LocationFour,
    layout: "/admin",
  },
  {
    path: "/locationfive",
    name: "",
    icon: "",
    component: LocationFive,
    layout: "/admin",
  },
  /*{
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
/*  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
    },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },*/
];

export default dashboardRoutes;

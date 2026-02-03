import { createBrowserRouter } from "react-router";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Overview from "../Pages/Overview/Overview";
import Call from "../Pages/Call/Call";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Setting from "../Pages/Setting/Setting";
import Profile from "../Components/Profile/Profile";
import Edit from "../Pages/Edit/Edit";
import Details from "../Pages/Details/Details";
import CallDetails from "../Pages/CallDetails/CallDetails";

export const router = createBrowserRouter([{
   path: "/",
   Component: Dashboard,
   children: [
      {
         index: true,
         Component: Overview
      },
      {
         path: "phone",
         Component: Call,
         children: [
            {
               index: true,
               Component: Details
            },
            {
               path: "/phone/:id",
               Component: CallDetails
            },
         ]
      },
      {
         path: "appoinments",
         Component: Appoinment
      },
      {
         path: "setting",
         Component: Setting,
         children: [
            {
               index: true,
               Component: Profile
            },
            {
               path: "/setting/edit",
               Component: Edit
            }
         ]
      },
   ]
}])
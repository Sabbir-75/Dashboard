import { createBrowserRouter } from "react-router";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Overview from "../Pages/Overview/Overview";
import Call from "../Pages/Call/Call";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Setting from "../Pages/Setting/Setting";

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
      Component: Call
      },
      {
      path: "appoinments",
      Component: Appoinment
      },
      {
      path: "setting",
      Component: Setting
      },
   ]
}])
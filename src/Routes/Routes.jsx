import { createBrowserRouter } from "react-router";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Overview from "../Pages/Overview/Overview";

export const router = createBrowserRouter([{
   path: "/",
   Component: Dashboard,
   children:[
      {
         index: true,
         Component: Overview
      }
   ]
}])
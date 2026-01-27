import { createBrowserRouter } from "react-router";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([{
   path: "/",
   Component: Dashboard
}])
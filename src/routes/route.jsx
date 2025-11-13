import { createBrowserRouter } from "react-router";
import Layout from "../MainLayout/Layout";
import Home from "../Home/Home";



export const router = createBrowserRouter([
    {
        path: '/',
        Component : Layout,
        children : [
            {
                path:'/',
                Component : Home
            }
        ]
    }
])
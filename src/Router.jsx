import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Mentors from "./pages/Mentors";
import Programs from "./pages/Programs";
import Layout from "./layout/Layout";
import GetInvolved from "./pages/GetInvolved";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: "mentors", 
        element: <Mentors /> 
      },
      { 
        path: "programs", 
        element: <Programs /> 
      },
      {  
        path: "get-involved", 
        element: <GetInvolved /> 
      },
      
    ],
  },
]);

export default router;

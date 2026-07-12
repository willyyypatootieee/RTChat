import { createBrowserRouter } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import Health from "./health/Health";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>,
        
    },
    {
        path: '/signup',
        element: <SignUp/>,
    },
    {
        path: '/health',
        element: <Health/>
    }
]);

export default router;
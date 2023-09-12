import { Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";



export const routesAuth = [
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate to='/auth/login' />,
    },
]
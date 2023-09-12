import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ui/views/ErrorPage";
import { CalendarRouter, routesCalendar } from "../calendar";
import { AuthRouter, routesAuth } from "../auth";


export const router = createBrowserRouter([

    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <CalendarRouter />,
        children: routesCalendar
    },
    {
        path: "/auth/*",
        errorElement: <ErrorPage />,
        element: <AuthRouter />,
        children: routesAuth
    },
    {
        path: '/*',
        errorElement: <ErrorPage />,
        element: <Navigate to='/' />
    },
])
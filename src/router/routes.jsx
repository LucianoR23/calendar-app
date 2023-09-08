import { Navigate, createBrowserRouter, createHashRouter } from "react-router-dom";
import { ErrorPage } from "../ui/views/ErrorPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";


export const router = createBrowserRouter([

    {
        path: "/calendar",
        errorElement: <ErrorPage />,
        element: <CalendarPage />
    },
    {
        path: "/auth/*",
        errorElement: <ErrorPage />,
        element: <LoginPage />,
    },
    {
        path: '/*',
        errorElement: <ErrorPage />,
        element: <Navigate to='/calendar' />
    },
])
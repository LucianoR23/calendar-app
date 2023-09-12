import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../hooks"
import { useEffect } from "react"


export const AuthRouter = () => {

    const { status, checkAuthToken } = useAuthStore()

    useEffect(() => {
        checkAuthToken()
    }, [])
    

    if( status === 'checking' ){
        return (
            <div className="d-flex justify-content-center" style={{ marginTop: '25%' }}>
                <div className="spinner-border text-primary" style={{ width: '5rem', height: '5rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if( status === 'authenticated' ){
        return <Navigate to='/*' />
    }

    return (
        <Outlet />
    )
}

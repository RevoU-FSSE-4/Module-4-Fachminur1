import { Navigate, Outlet } from "react-router-dom"
import { Navbar } from "../Component"

const ProtectRoute = () => {
    
    const token = localStorage.getItem('token')
    
    if (token) {
        return (
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        )
    }

    return <Navigate to="/"/>
    
}
export default ProtectRoute;
import { Outlet } from "react-router-dom"
import { Navbar } from "../Component"

const PublicRoute = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default PublicRoute;
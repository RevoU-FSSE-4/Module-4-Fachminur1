import { Card } from "../../Component/index"
import ProfileDetail from "./ProfileDetail"
import { User, AppContext } from '../../Provider/Provider'
import { Tombol } from "../../Component/Buttons/"
import { useContext } from "react"

const ProfileContainer = () => {

    const { setUser } = useContext(AppContext)

    const fetchUser = async () => {
        const response = await fetch('https://documenter.getpostman.com/view/15804286/2sA3Bn6CSh',{
            headers: {
                'Authorization' : localStorage.getItem('token') ?? ''
            },
            method: 'GET',
        })
        const data: User = await response.json()
        setUser?.(data)
    }

    return (
        <Card border>
            <ProfileDetail/>
            <Tombol label="Get User" onClick={() => fetchUser()}/>
        </Card>
    )
}
export default ProfileContainer;

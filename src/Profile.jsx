import { useAuth } from "./auth"
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <div>
        welcome {auth.user}

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
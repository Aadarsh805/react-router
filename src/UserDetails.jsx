import {useParams} from 'react-router-dom'

const UserDetails = () => {
  const {id} = useParams()
  return (
    <div>Details about user {id}</div>
  )
}

export default UserDetails
import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'
export const Navbar = () => {

  const user = useSelector((appStore) => appStore.user)
  
  const dispatch  = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = async () => {
   
    try {
      const isLoogedOut = await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true })
    dispatch(removeUser())
    navigate("/login")
    } catch (error) {
      console.log("Err: ",error.message)
      navigate("/error")
    }
  }

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Dev Tinder</Link>
      </div>
      {user && <div className="flex-none gap-2">
        <h3>{user.firstName + " " + user.lastName}</h3>
        <div className="dropdown dropdown-end mx-5 ml-0">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.PhotoUrl} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="justify-between">
                Feeds
              </Link>
            </li>
            <li onClick={() => { handleLogOut() }}><span className="justify-between">Logout</span></li>
          </ul>
        </div>
      </div>}
    </div>
  )
}

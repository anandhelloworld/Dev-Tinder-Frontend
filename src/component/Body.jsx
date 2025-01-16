import React, { Suspense, useEffect } from 'react'
import { Navbar } from './Navbar'
import { Outlet, useNavigate } from 'react-router'
import { Footer } from './Footer'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import appStore from '../utils/appStore'
import { addUser } from '../utils/userSlice'

export const Body = () => {
    const user = useSelector((appStore)=>appStore.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fetchUserData = async () => {
       if(!user){
        try {
            let profile = await axios.get(`${BASE_URL}/profile/view`, { withCredentials: true })
            dispatch(addUser(profile.data))
        } catch (error) {
            console.log("error: ", error,error.status,error.status==401)
            if (error.status == 401) {
               return navigate("/login")
            }
            navigate("/error")

        }
       }
    }
    useEffect(() => {
        fetchUserData()
    },[])
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Navbar />
            <Outlet />
            <Footer />
        </Suspense>
    )
}

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import appStore from '../utils/appStore'
import UserCard from './userCard'
import EditProfile from './EditProfile'

export const Profile = () => {
  const user = useSelector((appStore) => appStore.user)
  const [edit , setEdit ] = useState(false)
  if(!user){
    return <div>Loading</div>
  }
  
  return (
    <div className='flex justify-center align-middle gap-20'>
    <UserCard user={user}/>
    <EditProfile user={user} />
  </div>
  )
}

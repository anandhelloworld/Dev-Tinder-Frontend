import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import appStore from '../utils/appStore'
import UserCard from './userCard'


export default function ({ user }) {
    
    const [fname,setFname]=useState(user.firstName)
    const [lname,setlname]=useState(user.firstName)
    const [age,setAge] =useState(user.age)
    const [url, setUrl] =useState(user.PhotoUrl)


   
    return (
        <>
            <div className='flex justify-center items-center flex-col gap-3 ' >
                <label className="input input-bordered flex items-center gap-2 w-[100%]">
                    <input type="text" className="grow" placeholder="First Name" value={fname} onChange={(e)=>{setFname(event.target.value)}} />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-[100%]">
                    <input type="text" className="grow" placeholder="Email" value={lname} onChange={()=>{setlname(event.target.value)}} />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-[100%] py-4">
                    <input type="text" className="grows" placeholder='Photo Url'  onChange={()=>{setUrl(event.target.value)}} />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-[100%]">
                    <input type="text" className="grow" placeholder="Age" value={age} onChange={()=>{setAge(event.target.value)}}  />
                </label>
                <button className='btn'>Save Changes</button>

            </div>

        </>

    )
}

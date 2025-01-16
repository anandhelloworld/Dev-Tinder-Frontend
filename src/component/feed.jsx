import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import appStore from '../utils/appStore'
import { BASE_URL } from '../utils/constants'
import UserCard from './userCard'
export default function Feed() {
  const dispatch = useDispatch()
  const feed = useSelector((appStore) => appStore.feed)
  console.log("feed: ", feed)
  const getFeeds = async () => {
    console.log("gettiong feed")
    try {
      if (!feed) {
        const profiles = await axios.get(`${BASE_URL}/feed`, { withCredentials: true })
        dispatch(addFeed(profiles.data))
      }
    } catch (error) {
      console.log("err:", error)
    }
  }

  useEffect(() => {
    getFeeds()
  }, [])
  return (
    <>
      {feed && feed.map((person) => {
        console.log("prle:", person)
        return (
         <UserCard user ={person} key={person._id } />
        )
      })}
    </>
  )
}
;

import React from 'react'
import { Link } from 'react-router'
import {BASE_URL} from'../utils/constants'

export const Error = () => {
  return (
    <>
    <div>Error: SomeThing Went Wrong</div>
    <Link to="/login">Login Again</Link>
    </>
  )
}

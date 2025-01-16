import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './component/Navbar'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from './component/Login'
import { Body } from './component/Body'
import Feed from './component/Feed'
import { Profile } from './component/Profile'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'
import { Error } from './component/Error'
import EditProfile from './component/EditProfile'


function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={<Body />} >
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Feed />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/error" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

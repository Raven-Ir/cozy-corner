import React from 'react'
import { UserProfile } from '../Components/UserProfile.js';
import Library from '../Components/Library.js';
import SideBar from '../Components/NavBar.js';
import '../index.css'

const usersLibrary = () => {
  return (
    <>
        <UserProfile /> 
        <SideBar />
        <Library />
    </>
  )
}

export default usersLibrary;
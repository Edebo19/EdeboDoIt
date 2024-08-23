import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const Private = () => {
    const isLoggedIn = useSelector((state)=>state)
    const Nav = useNavigate()
  return (
    <>
    {
      isLoggedIn ? <Outlet/> : Nav("/login") 
    }
    </>
  )
}

export default Private
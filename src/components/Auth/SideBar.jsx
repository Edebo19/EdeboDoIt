import React from 'react'
import './LandingPage.css'
import { CgClose } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

const SideBar = ({setfirst}) => {
    const Nav = useNavigate()
  return (
    <div className='sidebar'>
        <div className="closeside"><CgClose onClick={()=> setfirst(false)} size={28} cursor="pointer"/></div>
        <h3 onClick={()=> Nav("/login")}>Login</h3>
        <h3 onClick={()=> Nav("/signup")}>Sign up</h3>
    </div>
  )
}

export default SideBar
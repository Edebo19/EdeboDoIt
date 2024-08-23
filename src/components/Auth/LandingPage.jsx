import React, { useState } from 'react'
import './LandingPage.css'
import logo from '../../assets/LaCurveLogo.jpg'
import burg from '../../assets/burg.png'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import SideBar from './SideBar'

const LandingPage = () => {
    const [first, setfirst] = useState(false)
    const Nav = useNavigate()
  return (
<>
{
    first ?     <div className='LandingPage'>
    <div className="LandingPageHeader">
        <div className="LandLogo">
            <img src={logo} alt="" />
        </div>
        <div className="LoginBar">
            <button onClick={()=> Nav("/login")}>Login</button>
            <button onClick={()=> Nav("/signup")} className='transparent'>Sign Up</button>
        </div>
        <div className="Account" >
            <FaUserCircle onClick={()=> setfirst(true)} size={30} color='white'/>
        </div>
    </div>
    <div className="sideHolder">
        <SideBar setfirst={setfirst}/>
        
    </div>
    <div className="Body">
        <div className="Left">
            <div className="ImageHolder">
            <img src={burg} alt="" />
            </div>
        </div>
        <div className="Right">
            <h1>
            Craving Something Delicious? <br/>
             We've Got You Covered
            </h1>
            <button onClick={()=> Nav("/signup")}>Get Started</button>
        </div>
    </div>
</div> :
    <div className='LandingPage'>
    <div className="LandingPageHeader">
        <div className="LandLogo">
            <img src={logo} alt="" />
        </div>
        <div className="LoginBar">
            <button onClick={()=> Nav("/login")}>Login</button>
            <button onClick={()=> Nav("/signup")} className='transparent'>Sign Up</button>
        </div>
        <div className="Account">
            <FaUserCircle onClick={()=> setfirst(true)} size={30} size={30} color='white'/>
        </div>
    </div>
    {/* <div className="sideHolder">
        <SideBar/>
        
    </div> */}
    <div className="Body">
        <div className="Left">
            <div className="ImageHolder">
            <img src={burg} alt="" />
            </div>
        </div>
        <div className="Right">
            <h1>
            Craving Something Delicious? <br/>
             We've Got You Covered
            </h1>
            <button onClick={()=> Nav("/signup")}>Get Started</button>
        </div>
    </div>
</div>
}
</>
  )
}

export default LandingPage
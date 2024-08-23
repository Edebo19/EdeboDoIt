import React from 'react'
import './BuyersHeader.css'
import logo from '../../assets/LaCurveLogo.jpg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Global/Slice'
import { BsCart } from 'react-icons/bs'

const BuyersHeader = ({setShow}) => {
    const Nav = useNavigate()
    const {cartArr} = useSelector((state)=> state)
    const dispatch = useDispatch()

    const logoutFunc=()=>{
        dispatch(logout())
        Nav("/login")
      }
  return (
    <div className='BuyersHeader'>
        <div className="HeaderLogo">
            <div className="Logobox">
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="MenuOptions">
            Our Vendors
        </div>
        <div className="Myorder" onClick={()=> setShow(true)}>
            <button>My Order <div className="Round">{cartArr.length}</div></button>
            <button onClick={logoutFunc} className='transparent'>Logout</button>
        </div>
        <div className="mobilecart">
            <BsCart onClick={()=> setShow(true)} fontWeight={600} size={25} color='white'/>
            
            <button onClick={logoutFunc}>Logout</button>
        </div>
    </div>
  )
}

export default BuyersHeader
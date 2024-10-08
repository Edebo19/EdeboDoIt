import React, { useState } from 'react'
import './Checkout.css'
import { LuLocate } from 'react-icons/lu'
import { Vendor } from '../JS/Vendors'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const [showUp, setShowUp] = useState(0)
    const [vendors, setVendors] = useState("")
    // console.log(vendors)
    const FilteredVendor = Vendor.filter((e)=> e.vendorname === vendors)
    console.log(FilteredVendor)
    const {cartArr} = useSelector((state)=> state)
    // console.log(cartArr.filter((e)=> e.vendorname === vendors))
    const filteredCart = cartArr.filter((e)=> e.vendorname === vendors)
    // console.log(filteredCart)

  
  return (
    <div className='CheckoutBody'>
        {
            showUp == 0 ?
            <div className="CheckoutHolder">
            <div className="PaymentMethod">
                <div className="PaymentHeader">
                    <h3>Select Payment method:</h3>
                    <select onChange={(e)=> setVendors(e.target.value)}>
                        <option value="">--Vendors--</option>
                        <option value="Creamy Bakes">Creamy Bakes</option>
                        <option value="Mama Rita">Mama Rita</option>
                        <option value="Iya Bisi">Iya Bisi</option>
                        <option value="Drink Valore">Drink Valore</option>
                        <option value="Abubakar">Abubakar</option>
                    </select>
                </div>
                
            </div>
            <div className="PaymentBody">
                <div className="VendorCheckoutBody">
                    <div className="VendHeader">
                        <h5>{vendors}</h5>
                        <p>Total: ₦2800</p>
                    </div>
                    <div className="VendItems">
                    {
                        filteredCart.length == 0 ? <div className='hereee'>No Item from this vendor selected in cart</div>:
                        
                            filteredCart.map((e)=> (
                                <div className="vendCard" key={e.id}>
                            <div className="imageCircle">
                                <img src={e.image} alt="" />
                            </div>
                            <div className="pricename">
                                <h3>{e.name}</h3>
                                <p>₦{e.price}</p>
                            </div>
                            <div className="QuantityVend">
                                <div className="MainQty">
                                    <h4>Quantity: 0</h4>
                                </div>
                            </div>
                        </div>
                            ))
                        
                    }
                    </div>
                    <div className="vendFooter">
                        <button className="paymentOnDelivery" onClick={()=> setShowUp(1)}>Pay on Delivery</button>
                        <button className="paymentOnPickUp" onClick={()=> setShowUp(2)}>Pay on PickUp</button>
                    </div>
                </div>
            </div>
            
        </div> : showUp === 1 ?
        <div className="CheckoutHolder">
        <div className="PaymentMethod">
            <div className="PaymentHeader">
                <h3>Select Payment method:</h3>
            </div>
            
        </div>
        <div className="PaymentBody">
            <div className="VendorCheckoutBody">
                <div className="VendHeader">
                    <h5></h5>
                    <p>Total: ₦2800</p>
                </div>
                <div className="VendItems">
                    {
                        food.map((e)=> (
                            <div className="vendCard">
                        <div className="imageCircle"></div>
                        <div className="pricename">
                            <h3>Jollof rice</h3>
                            <p>₦800</p>
                        </div>
                        <div className="QuantityVend">
                            <div className="MainQty">
                                <h4>Quantity: 0</h4>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
                <div className="vendFooter">
                    <button className="paymentOnDelivery">Pay on Delivery</button>
                    <button className="paymentOnPickUp">Pay on PickUp</button>
                </div>
            </div>
        </div>
         <div className="Delivery">
            <div className="Input">
                <input type="text" placeholder='Address' required />
                <button type='Submit' onClick={()=> setShowUp(0)}>Submit</button>
            </div>
        </div> 
        
    </div> :  
            <div className="CheckoutHolder">
            <div className="PaymentMethod">
                <div className="PaymentHeader">
                    <h3>Select Payment method:</h3>
                </div>
                
            </div>
            <div className="PaymentBody">
                <div className="VendorCheckoutBody">
                    <div className="VendHeader">
                        <h5>Mama Rita</h5>
                        <p>Total: ₦2800</p>
                    </div>
                    <div className="VendItems">
                    {
                        food.map((e)=> (
                            <div className="vendCard">
                        <div className="imageCircle"></div>
                        <div className="pricename">
                            <h3>Jollof rice</h3>
                            <p>₦800</p>
                        </div>
                        <div className="QuantityVend">
                            <div className="MainQty">
                                <h4>Quantity: 0</h4>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                    </div>
                    <div className="vendFooter">
                        <button className="paymentOnDelivery">Pay on Delivery</button>
                        <button className="paymentOnPickUp">Pay on PickUp</button>
                    </div>
                </div>
            </div>
            {/* <div className="Delivery">
                <div className="Input">
                    <input type="text" placeholder='Address' required />
                    <button type='Submit'>Submit</button>
                </div>
            </div> */}
            <div className="Delivery">
                <div className="Input">
                    <div className="holdInputt">
                    <h4>Our Address:</h4>
                <p><LuLocate/> 123, Mokoya street, Lagos Nigeria.</p>
                    </div>
                    <div className="ok">
                        <button  onClick={()=> setShowUp(0)}>Ok</button>
                    </div>
                </div>
            </div>
            
        </div>
        }
        
        
    </div>
  )
}

export default Checkout
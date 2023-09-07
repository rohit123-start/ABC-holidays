import React,{useContext,useRef} from 'react'
import { ShopContext } from '../context/Context'
import data from '../api/Api'
import Navoms from './Navoms'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

const Orderpage = () => {
    const navigate = useNavigate()

    const redirectToOms = () => {
        navigate('/oms')
    }
  
    const { cartItems, setObjItems, objItems } = useContext(ShopContext)
    console.log(`cart is ${cartItems}`)
    console.log(`obj is ${objItems}`)
    console.log(objItems[1])
    const selected = cartItems - 1
  
    const name = useRef(null)
    const gmail = useRef(null)
    const amount = useRef(null)
    const location = useRef(null)
  
    const method = (obj) => {
        
      setObjItems(obj);
      localStorage.setItem('formdata', JSON.stringify(obj));
      
    }
  
    const Formsubmit = event => {
      event.preventDefault();
      const formobj =[
        name.current.value,
        gmail.current.value,
        amount.current.value,
        location.current.value
      ]
      method(formobj)
      event.target.reset();
      redirectToOms();
    }

  return (
    <div>
        <div>
          <Nav></Nav>
        </div>
        <br></br>
        <h1>Order Page</h1>
        <form onSubmit={Formsubmit}>
              <br></br>
              <br></br>
              <h4>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                  <div className='col-3'>
                    Name:
                  </div>
                  <div className='col-1'>
                    <input ref={name}></input>
                  </div>
                </div>
              </h4>
              <br></br>
              <h4>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                  <div className='col-3'>
                    Gmail:
                  </div>
                  <div className='col-1'>
                    <input ref={gmail}></input>
                  </div>
                </div>
              </h4>
              <br></br>
              <h4>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                  <div className='col-3'>
                    Amount:
                  </div>
                  <div className='col-1'>
                    <input ref={amount}></input>
                  </div>
                </div>
              </h4>
              <br></br>
              <h4>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                  <div className='col-3'>
                    Location:
                  </div>
                  <div className='col-1'>
                    <input ref={location}></input>
                  </div>
                </div>
              </h4>
              <br></br>
              <br></br>
              <div className='row'>
                <div className='col-4'></div>
                <div className='col-3'>
                    <button type='submit' className='btn btn-warning btn-lg'>
                    <h2>Book Now</h2>
                    </button>
                </div>
                <div className='col-1'></div>
                
              </div>
              <br></br>
              
              
            </form>
    </div>
  )
}

export default Orderpage
import React,{useContext,useRef} from 'react'
import { ShopContext } from '../context/Context'
import data from '../api/Api'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

const Pdp = () => {

  const navigate = useNavigate()

  const redirectToOrderpage = () => {
      navigate('/orderpage')
  }

  const { cartItems, setObjItems, objItems } = useContext(ShopContext)
  console.log(`cart is ${cartItems}`)
  console.log(`obj is ${objItems}`)
  console.log(objItems[1])
  const selected = cartItems - 1

  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
          <div>
            <img src={`${data[`${selected}`].img}`} height={400}></img>
          </div>
            <br></br>
            <h3>{data[`${selected}`].name}</h3>
          </div>
          <div className='col-6'>
            <div>
            <br></br>
              <br></br>
              <h4>
                <div className='row'>
                  <div className='col-4'>
                    Location:
                  </div>
                  <div className='col-8'>
                    <div>{data[`${selected}`].name}</div>
                  </div>
                </div>
              </h4>
              <br></br>
              <h4>
                <div className='row'>
                  <div className='col-4'>
                    Days:
                  </div>
                  <div className='col-8'>
                  <div>{data[`${selected}`].days}</div>
                  </div>
                </div>
              </h4>
              <br></br>
              <h4>
                <div className='row'>
                  <div className='col-4'>
                    Amount:
                  </div>
                  <div className='col-8'>
                    <div>{data[`${selected}`].amount}</div>
                  </div>
                </div>
              </h4>
              <br></br>
              <br></br>
              <div>
                <button className='btn btn-warning btn-lg' onClick={()=>redirectToOrderpage()}>
                  <h2>Book Now</h2>
                </button>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pdp
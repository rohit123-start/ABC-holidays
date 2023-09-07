import React ,{useContext} from 'react'
import Navoms from './Navoms'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import { ShopContext } from '../context/Context'
import data from '../api/Api'


const Oms = () => {
    const { objItems , cartItems, stateItems } = useContext(ShopContext)
    console.log(`objs are ${objItems[0]}`)
    const selected = cartItems - 1
  
  return (
    <div>
        <Navoms></Navoms>
        <br></br>
        <h1>OMS-DashBoard</h1>
        <br></br>
        <div className='navbar-size'>
          <div className='row'>
            <div className='col-3 navbar-size' >
              <br></br>
              <h1>State</h1>
              <br></br>
              <br></br>
              <br></br>
              <button onClick={isDisabled} className='btn btn-warning'>
                  <h3>{stateItems}</h3>
              </button>
            </div>
            <div className='col-4 navbar-size'>
            <h4>
            <br></br>
                <div className='row'>
                  
                  <div className='col-3'>
                    Name:
                  </div>
                  <div className='col-1'>
                    {objItems[0]}
                  </div>
                </div>
              </h4>
              <br></br>
              <h4>
                <div className='row'>
                  <div className='col-3'>
                    Gmail:
                  </div>
                  <div className='col-1'>
                    {objItems[1]}
                  </div>
                </div>
              </h4>
              <br></br>
              <h4>
                <div className='row'>
                  <div className='col-3'>
                    Amount:
                  </div>
                  <div className='col-1'>
                  {objItems[2]}
                  </div>
                </div>
              </h4>
              <br></br>
              <h4>
                <div className='row'>
                  <div className='col-3'>
                    Location:
                  </div>
                  <div className='col-1'>
                  {objItems[3]}
                  </div>
                </div>
              </h4>

            </div>
            <div className='col-2 navbar-size'>
            <br></br>
              <div>
                <img src={`${data[`${selected}`].img}`} height={200}></img>
              </div>
              
              <h3>{data[selected].name}</h3>
            </div>
          </div>
            

        </div>
    </div>
    
  )
}

export default Oms
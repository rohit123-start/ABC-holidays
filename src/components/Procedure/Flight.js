import React, {useContext} from 'react'
import { ShopContext } from '../../context/Context'
import Navoms from '../Navoms'
import { useNavigate } from 'react-router-dom'

const Flight = () => {
    const { changestate } = useContext(ShopContext)

    const navigate = useNavigate()

    const redirectToOms = () => {
        navigate('/oms')
    }
  return (

    <div>
        <div>
            <Navoms></Navoms>
        </div>
        <br></br>
        <br></br>
        <h5>
            <div className='form-container'>
                <div className='row'>
                    <h1>Flight</h1>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-1'>
                    Name:
                    </div>
                    <div className='col-1'>
                    <input></input>
                    </div>
                </div>
                <br></br>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-1'>
                    V-Code:
                    </div>
                    <div className='col-1'>
                    <input></input>
                    </div>
                </div>
                <br></br>
                <button className='btn btn-warning' onClick={()=>changestate("Flight Verified")}>Confirm</button>
            </div>
            
        </h5>
    </div>
  )
}

export default Flight
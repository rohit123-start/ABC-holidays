import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/Context'

const Post = ({d}) => {
    const { addToCart } = useContext(ShopContext)

    const navigate = useNavigate()

    const redirectToPdp = () => {
        navigate('/pdp')
    }
  return (
    <div className='col-4 product-container'>
        <div className='row'>
            <div className='col-3'>
                
            </div>
            <div className='col-7'>
            <h1>{d.name}</h1>
            </div>
            <div className='col-2'>

            </div>
        </div>
        <div className='image-container'>
            <img src={`${d.img}`} width={200} height={210}></img> 
        </div>
        <div className='row'>
            <div className='col-3'>
            </div>
            <div className='col-7'>
                <h1>
                <button className='btn btn-warning' onClick={()=>{redirectToPdp();addToCart(d.id);}}>
                Buy Now
                </button>
                </h1>
            </div>
            <div className='col-2'>
            </div>
        </div>
    </div>
  )
}

export default Post
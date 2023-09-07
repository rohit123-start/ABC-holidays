import React,{useContext} from 'react'
import data from '../api/Api'
import Post from './Post'
import Nav from './Nav'


const Plp = () => {
  return (
    <div >
    <div>
      <Nav></Nav>
    </div>
    <div className='row'>
      {
        data.map((d)=>(
          <Post d={d} key={d.id}></Post>
      ))}

    </div>
        
  

    </div>
  )
}

export default Plp
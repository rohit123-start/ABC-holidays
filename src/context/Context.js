import React,{createContext, useState, useEffect } from 'react'
import data from '../api/Api';

export const ShopContext = createContext(null);

const Context = (props) => {
    const [stateItems, setStateItems] = useState(
      () => {
        // Step 7: Initialize count from local storage or 0 if not found
        const statevalue = sessionStorage.getItem('state');
        return statevalue ? statevalue : "pending";
      }
    )

    const changestate = (state) => {
      sessionStorage.setItem('state', state);
      switch(state) {
        case 'Account Verified':
          setStateItems("Account Verified")
          break
        case 'Visa Verified':
          setStateItems("Visa Verified")
          break
        case 'Flight Verified':
          setStateItems("Flight Verified")
          break
        case 'Hotel Verified':
          setStateItems("Hotel Verified")
          break
        case 'Sightseeing Verified':
          setStateItems("Sightseeing Verified")
          break
        case 'Transfer Verified':
          setStateItems("Transfer Verified")
          break
        default:
          setStateItems("Pending")  
      }
    }

    const [cartItems, setCartItems] = useState(
      () => {
        // Step 7: Initialize count from local storage or 0 if not found
        const storedCount = localStorage.getItem('picture');
        return storedCount ? parseInt(storedCount, 10) : 0;
      }
    )
    
    const addToCart = (itemId) => {
      
      setCartItems(itemId);
      
      localStorage.setItem('picture', itemId.toString());
    }
    
    const [objItems, setObjItems] = useState(
      () => {
        // Step 7: Initialize count from local storage or 0 if not found
        const storedData = localStorage.getItem('formdata');
        return storedData ? JSON.parse(storedData) : '';
      }
    )
    console.log(cartItems)

    const contextvalue = { cartItems , addToCart, setObjItems, objItems, stateItems, setStateItems, changestate };
  return (
    <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>
  )
}

export default Context
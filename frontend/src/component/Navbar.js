import React,{useContext}from 'react'
import { storesContext } from '../context/StoreContext'


const Navbar=(props)=> {
const {stores}=useContext(storesContext);

   return(
        <div className="navbar ">
    <h1>Available storeList in your area</h1>
    <p>Currently you have {stores.length} in your storeList </p>
        
            
        </div>
    )
}

export default Navbar

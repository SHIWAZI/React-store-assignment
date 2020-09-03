import React, {useContext}from 'react'
import { storesContext } from '../context/StoreContext'

const StoreDetails=({store})=> {
    const {removeStore} = useContext(storesContext);
    return (
        <div className='store-list'>
            <li   onClick={()=>removeStore(store.id)}>
    <div className="store">{store.store}</div>
    <div className="location">{store.location}</div>
            </li>
        </div>
    )
}

export default StoreDetails

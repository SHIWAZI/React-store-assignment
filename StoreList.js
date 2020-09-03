import React,{useContext} from 'react';
import StoreDetails from './StoreDetails'
import {storesContext} from '../context/StoreContext'

const StoreList=()=> {
    const{stores}=useContext(storesContext)
    return stores.length? (
        <div className="store-list">
            <ul>
                
                {stores.map(store=>{return(<StoreDetails store={store} Key={store.id}/>);
                })}
               
            </ul>
        </div>
    ):(
          <div className='empty'>
              Hey...There is no store around you !!! please find one
          </div>
    )
}

export default StoreList

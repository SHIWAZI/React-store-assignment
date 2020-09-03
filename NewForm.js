import React,{useContext,useState} from 'react'
import { storesContext } from '../context/StoreContext';


const NewForm=()=> {
    const {addStore}=useContext(storesContext);
    const [store,setStore]=useState('');
    const [location,setLocation]=useState('');
    
    const handleStore=(e)=>{
        e.preventDefault();
       addStore(store,location);
       setStore('');
       setLocation('');
    }
    return (
      
       <form onSubmit={handleStore}>
       <input type="text"  placeholder={'stores'} value={store} onChange={(e)=>setStore(e.target.value)} required/>
       <input type="text"  placeholder={'store location'} value={location} onChange={(e)=>setLocation(e.target.value)} required/>
   
       <input type="submit" value="AddToStoreList" onClick={handleStore}/>
       </form>
    
    )
}

export default NewForm ;

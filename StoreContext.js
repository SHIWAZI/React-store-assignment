import React, { createContext ,useState} from "react"
import uuid from 'uuid/v1'

export const storesContext=createContext();

const StoreContextProvider=(props)=> {
    const[stores,setStores]=useState([
        {store:'Store1',location:'GoogleMapes1', id:1},
        {store:'Store2',location:'GoogleMapes2', id:2},
        {store:'Store3',location:'GoogleMapes3', id:3},
        {store:'Store4',location:'GoogleMapes4', id:4},
    ]);

    const addStore=(store,location)=>{
        setStores([...stores,{store,location,id:uuid()}])
    }

    const removeStore=(id)=>{
     setStores(stores.filter(store=>store.id!==id))

    }



    return (
        <storesContext.Provider value={{stores,addStore,removeStore}}>
        {props.children}
        </storesContext.Provider>
    )
}

export default StoreContextProvider;

import React from 'react';
import StoreContextProvider from './context/StoreContext';
import Navbar from './component/Navbar';
import StoreList from './component/StoreList';
import NewForm from './component/NewForm';
import CreateStoreForm from './component/CreateStoreForm';



function App() {
  return (
    <div className="App">
     <StoreContextProvider>
     <Navbar/>
     <StoreList/>
     <NewForm/>
     <CreateStoreForm/>
     </StoreContextProvider>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import Web from "./Routes/Web"
import { DefaultContext } from './contexts/DefaultContext';
const App = ()=>{
  const [data,setData] = useState({
    isLoading:false,
    data:{
      user:{
        name:"sharif",
        email:"developersharif@yahoo.com"
      }
    }
  });
  return(
    <React.StrictMode>
    <DefaultContext.Provider value={{data,setData}}>
   <RouterProvider router={Web} />
   </DefaultContext.Provider>
  </React.StrictMode>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)

/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { DefaultContext } from "../../contexts/DefaultContext";
import { Link, useNavigation } from "react-router-dom";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
const AppLayout = ({title="Default Title",children}) => {
  const data = useContext(DefaultContext)
  const navigation = useNavigation();
  useEffect(()=>{
    if(navigation.state === "loading"){
    NProgress.start();
    }else{
    NProgress.done()
    }
  })
    document.title = title
    return (
        <div>
        Global State: {data.data.data.user.name} { data.data.data.user.email }
      <h2> Routes:</h2>
      <nav style={{display:'flex',flexWrap: 'wrap',justifyContent: 'space-evenly'}}>
      <Link to="/">Home</Link> <br />
      <Link to="/usestate">useState Example</Link> <br />
      <Link to="/memo">Memo Example</Link> <br />
      <Link to="/reducer">useReducer Example</Link> <br />
      <Link to="/context">Context API</Link> <br />
      <Link to="/loader">Route Loader</Link> <br />
      <Link to="/redirect">Redirect</Link> <br />
      <Link to="/update/hello-world">Parameter</Link> <br />
      <Link to="/datatable" replace={true}>Data Table</Link> <br />
      </nav>
            <hr />
            {children}
        </div>
    );
};

export default AppLayout;
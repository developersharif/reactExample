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
      <h2> Links:</h2> <br />
      <Link to="/">Home</Link> <br />
      <Link to="/test">Loader APi Example</Link> <br />
      <Link to="/redirect">Redirect</Link> <br />
      <Link to="/update/hello-world">Parameter</Link> <br />
      <Link to="/datatable" replace={true}>Data Table</Link> <br />
            <br />
            {children}
        </div>
    );
};

export default AppLayout;
/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { DefaultContext } from "../../contexts/DefaultContext";
import { NavLink, useNavigation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const AppLayout = ({ title = "Default Title", children }) => {
  const data = useContext(DefaultContext);
  const navigation = useNavigation();
  useEffect(() => {
    //Nprogress Loading on/off logic!
    //Reference: https://ricostacruz.com/nprogress/
    if (navigation.state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  });
  document.title = title;
  //Reference: https://reactrouter.com/en/main/components/nav-link#style
  const activeStyle = ({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  };
  return (
    <div>
      <center>
        Global State: {data.data.data.user.name} {data.data.data.user.email}
      </center>
      <h2> Routes:</h2>
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {/* Reference:  https://reactrouter.com/en/main/components/nav-link#navlink */}
        <NavLink
          to="/"
          style={activeStyle}
        >
          Home
        </NavLink>{" "}
        <br />
        <NavLink
          to="/usestate"
          style={activeStyle}
        >
          useState Example
        </NavLink>{" "}
        <br />
        <NavLink
          to="/useeffect"
          style={activeStyle}
        >
          useEffect Example
        </NavLink>{" "}
        <br />
        <NavLink
          to="/memo"
          style={activeStyle}
        >
          Memo Example
        </NavLink>{" "}
        <br />
        <NavLink
          to="/reducer"
          style={activeStyle}
        >
          useReducer Example
        </NavLink>{" "}
        <br />
        <NavLink
          to="/context"
          style={activeStyle}
        >
          Context API
        </NavLink>{" "}
        <br />
        <NavLink
          to="/loader"
          style={activeStyle}
        >
          Route Loader
        </NavLink>{" "}
        <br />
        <NavLink
          to="/redirect"
          style={activeStyle}
        >
          Redirect
        </NavLink>{" "}
        <br />
        <NavLink
          to="/update/hello-world"
          style={activeStyle}
        >
          Parameter
        </NavLink>{" "}
        <br />
        <NavLink
          to="/datatable"
          replace={true}
          style={activeStyle}
        >
          Data Table
        </NavLink>{" "}
        <br />
      </nav>
      <hr />
      {children}
    </div>
  );
};

export default AppLayout;

/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { DefaultContext } from "../../contexts/DefaultContext";
import { Link, NavLink, useNavigation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const AppLayout = ({ title = "Default Title", children }) => {
  const data = useContext(DefaultContext);
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  });
  document.title = title;
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
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>{" "}
        <br />
        <NavLink
          to="/usestate"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          useState Example
        </NavLink>{" "}
        <br />
        <NavLink
          to="/useeffect"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          useEffect Example
        </NavLink>{" "}
        <br />
        <NavLink
          to="/memo"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Memo Example
        </NavLink>{" "}
        <br />
        <NavLink
          to="/reducer"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          useReducer Example
        </NavLink>{" "}
        <br />
        <NavLink
          to="/context"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Context API
        </NavLink>{" "}
        <br />
        <NavLink
          to="/loader"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Route Loader
        </NavLink>{" "}
        <br />
        <NavLink
          to="/redirect"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Redirect
        </NavLink>{" "}
        <br />
        <NavLink
          to="/update/hello-world"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Parameter
        </NavLink>{" "}
        <br />
        <NavLink
          to="/datatable"
          replace={true}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
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

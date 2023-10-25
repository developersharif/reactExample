import {
 createHashRouter,
  } from "react-router-dom";
import Param from "../Pages/Param";
import Redirect from "../components/Redirect";
import Home from "../Pages/Home";
import DataTable from "../Pages/DataTable";
import Loader from "../Pages/Loader";
import Context from "../Pages/Context";
import UseReducer from "../Pages/UserReducer";
import UseState from "../Pages/UseState";
import TestMemo from "../Pages/TestMemo";
import Redirected from "../Pages/Redirected";
import TestEffect from "../Pages/TestEffect";
//Always use to createBrowserRouter is best practice
//Reference https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter
//We used createHashRouter for github pages deployment!
const Web = createHashRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/loader",
        element:<Loader/>,
        loader:()=>{
            const getUsers = async ()=>{
                const req = await fetch("https://jsonplaceholder.typicode.com/users");
                const res = await req.json();
                return res;
            }
            return getUsers();
        }
    },
    {
        path:"/usestate",
        element:<UseState/>
    },
    {
        path:"/useeffect",
        element:<TestEffect/>
    },
    {
        path:"/memo",
        element:<TestMemo/>
    },
    {
        path:"/reducer",
        element:<UseReducer/>
    },
    {
        path:"/context",
        element:<Context/>
    },
    {
        path:"/update/:id?",
        element:<Param/>
    },
    {
        path:"/redirect",
        element:<Redirect/>
    },
    {
        path:"/redirected",
        element:<Redirected/>
    },
    {
        path:"/datatable",
        element:<DataTable/>
    }
]);

export default Web;
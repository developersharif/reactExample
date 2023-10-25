import {
 createHashRouter,
  } from "react-router-dom";
import Param from "../components/Param";
import Loader from "../components/Loader";
import Redirect from "../components/Redirect";
import DataTable from "../components/Test/DataTable";
import Home from "../Pages/Home";

const Web = createHashRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/test",
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
        path:"/update/:id?",
        element:<Param/>
    },
    {
        path:"/redirect",
        element:<Redirect/>
    },
    {
        path:"/datatable",
        element:<DataTable/>
    }
]);

export default Web;
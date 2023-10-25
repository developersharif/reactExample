/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {Link, useSearchParams } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Description from "../components/Description";
import CodeExample from "../components/CodeExample";

const DataTable = () => {
  const [data,setData] = useState([{name:"sharif",email:"sharif@default.com",age:22},{name:"arif",email:"arif@default.com",age:23},{name:"test",email:"test@default.com",age:21}]);
  const [filtered,setFiltered] = useState();
  const [formData,setFormData] = useState();
  const [queryParam,setQueryParam] = useSearchParams()
  useEffect(()=>{
    const search = queryParam.get("search");
    if(search){
      const filteredArray = data.filter((item)=>{
        return(item.name.includes(search) || item.email.includes(search) || item.age == search);
      });
      if (filteredArray.length > 0) {
      setFiltered(filteredArray);
      }
    }else{
      setQueryParam("")
      setFiltered(data)
    }
  },[queryParam,data])
  function handleSubmit(e){
    e.preventDefault();
    setData((prev)=>[formData,...prev])
  }
  return(<>
<AppLayout title="DataTable Page">
<center>
  <h2>Live Data Form.</h2>
  <hr />
  <h3>Add Data</h3>
  <form>
    <input type="text" placeholder="Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}/> <br />
    <input type="email" placeholder="Email" onChange={(e)=>setFormData({...formData,email:e.target.value})}/> <br />
    <input type="number" placeholder="Age" onChange={(e)=>setFormData({...formData,age:e.target.value})}/> <br />
    <input type="submit" value="Add" onClick={handleSubmit} />
  </form>
  <br />
  <hr />
  <h3>Search Data</h3>
<input type="search" placeholder="Search..." onChange={(e)=>setQueryParam(`search=${e.target.value}`)} />
  <table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {filtered && filtered.map((item,index)=>(
    <tr key={index}>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.age}</td>
  </tr>
    ))}

  </tbody>
</table>
</center>
<Description>
  <CodeExample code={`// Import necessary modules from React and React Router
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

// Define a functional component named DataTable
const DataTable = () => {
  // Define and initialize state variables
  const [data, setData] = useState([
    { name: "sharif", email: "sharif@default.com", age: 22 },
    { name: "arif", email: "arif@default.com", age: 23 },
    { name: "test", email: "test@default.com", age: 21 }
  ]);
  const [filtered, setFiltered] = useState();
  const [formData, setFormData] = useState();
  const [queryParam, setQueryParam] = useSearchParams();

  // Use the useEffect hook to filter data based on the query parameter
  useEffect(() => {
    // Extract the "search" query parameter from the URL
    const search = queryParam.get("search");
    if (search) {
      // Filter the data based on the search query
      const filteredArray = data.filter((item) => {
        return (
          item.name.includes(search) ||
          item.email.includes(search) ||
          item.age == search
        );
      });
      if (filteredArray.length > 0) {
        // Update the filtered state if there are matching results
        setFiltered(filteredArray);
      }
    } else {
      // If no search query is provided, clear the query parameter and display all data
      setQueryParam("");
      setFiltered(data);
    }
  }, [queryParam, data]);

  // Define a function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Add the formData to the data state
    setData((prev) => [formData, ...prev]);
  }

  // Render the DataTable component
  return (
    <>
      {/* Render the AppLayout component with a title */}
      <AppLayout title="DataTable Page">
        <center>
          <h2>Live Data Form.</h2>
          <hr />
          <h3>Add Data</h3>
          <form>
            {/* Input fields for name, email, and age */}
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            /> <br />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            /> <br />
            <input
              type="number"
              placeholder="Age"
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            /> <br />
            <input type="submit" value="Add" onClick={handleSubmit} />
          </form>
          <br />
          <hr />
          <h3>Search Data</h3>
          {/* Input field for searching data */}
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setQueryParam({ search: e.target.value })}
          />
          {/* Display data in a table */}
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {/* Map and display the filtered data */}
              {filtered &&
                filtered.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </center>
      </AppLayout>
    </>
  );
};

// Export the DataTable component
export default DataTable;
`}/>
</Description>
</AppLayout>
  </>)
};

export default DataTable;

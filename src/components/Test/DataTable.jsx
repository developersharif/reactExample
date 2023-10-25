/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {Link, useSearchParams } from "react-router-dom";
import AppLayout from "../../Pages/layout/AppLayout";

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
</AppLayout>
  </>)
};

export default DataTable;

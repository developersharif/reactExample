import { useState } from "react";

function App() {
  //array 
  //  const [count,setCount] = useState([1,2,3]);
  //   function handleClick(){
  //     const nextItem = count.length 
  //     setCount([...count,nextItem]);
  //   }

  //object
  const [data,setData] = useState([
    {name:"demo name"}
  ]);
  const [input,setInput] = useState()
  function handleClick(){
    setData([...data,{name:input}]);
  }
  function handleInput(e){
    setInput(e.target.value);
  }
  return(
    <>
    {data.map((item,index)=>(
      <li key={index}>{item.name}</li>
    ))}
    <input type="text" placeholder="name" onChange={handleInput} />
    <button onClick={handleClick}>Add</button>
    </>
  );
}


export default App;
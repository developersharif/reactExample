import { useEffect, useState } from "react";

function TestEffect() {

    const [count,setCount] = useState(0)
    const [data,setData] = useState(0)
    useEffect(()=>{
        console.log("called");
    },[data]);
    return (<>
    UseEffect Test here
    <br />
    {count}
    <hr />
    {data}
    <br />
    <button onClick={()=>setData(data+1)}>Click</button>
    
    
    </>);
}

export default TestEffect;
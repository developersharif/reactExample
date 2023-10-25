import { useState } from "react";
import AppLayout from "./layout/AppLayout";
import Description from "../components/Description";
import CodeExample from "../components/CodeExample";
import Anchor from "../components/Anchor";

function UseState() {
  //array
  //  const [count,setCount] = useState([1,2,3]);
  //   function handleClick(){
  //     const nextItem = count.length
  //     setCount([...count,nextItem]);
  //   }

  //object
  const [data, setData] = useState([{ name: "demo name" }]);
  const [input, setInput] = useState();
  function handleClick() {
    setData([...data, { name: input }]);
  }
  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <AppLayout>
        {data && data.map((item, index) => <li key={index}>{item.name}</li>)}
        <input type="text" placeholder="name" onChange={handleInput} />
        <button onClick={handleClick}>Add</button>
        <Description>
          <Anchor>https://react.dev/reference/react/useState#reference</Anchor>
          useState is a built-in React hook that allows you to add state to your
          functional components. In simple terms, it's like having variables
          that can hold and manage data that changes over time within your
          component.
          <CodeExample
            code={`import React, { useState } from 'react';

      function CounterApp() {
        // Declare a state variable 'count' and initialize it to 0
        const [count, setCount] = useState(0);

        // 'count' is the current state value, and 'setCount' is a function to update it

        // Function to increment the count
        const increment = () => {
          setCount(count + 1);
        };

        // Function to decrement the count
        const decrement = () => {
          setCount(count - 1);
        };

        return (
          <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>
        );
      }

`}
          />
        </Description>
      </AppLayout>
    </>
  );
}

export default UseState;

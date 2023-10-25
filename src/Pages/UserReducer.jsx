import { useReducer } from "react";
import AppLayout from "./layout/AppLayout";
import Description from "../components/Description";
import CodeExample from "../components/CodeExample";
import Anchor from "../components/Anchor";
//Reducer Component Example
function UseReducer() {
    const [state,dispatch] = useReducer(countReducer,0)
    function handleClick(){
        dispatch({
            type:"incrementPlusOne",
            name:"hello name"
        })
    }
    function handleDecrement(){
        dispatch({
            type:"decrement"
        })
    }
    return (<>
    <AppLayout>
    <h2>UseReducer Hook Experiment</h2>
    {state}
    <br />
    <button onClick={handleClick}>Increment me</button>
    <button onClick={handleDecrement}>Decrement me</button>
    <Description>
        <Anchor>https://react.dev/reference/react/useReducer#reference</Anchor>
    useReducer is another built-in React hook used for managing more complex state logic in functional components. It is an alternative to useState and is particularly useful when you have state transitions that depend on the previous state. It allows you to handle state updates in a more controlled and predictable manner.
    <CodeExample code={`
    /*
        Suppose you want to create a counter application, similar to the earlier example, but using useReducer to manage the state transitions. Here's how you can do it:
        jsx
        Copy code
    */
    import React, { useReducer } from 'react';

    // Reducer function to manage state transitions
    const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return { count: state.count + 1 };
        case 'DECREMENT':
        return { count: state.count - 1 };
        default:
        return state;
    }
    };

    function CounterApp() {
    // Initialize state using useReducer
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
        <h1>Counter: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
    }`
    }/>
    </Description>
    </AppLayout>
    </>);
}
//Reducer Action Function (Seperated Logic here)
function countReducer(state,action){
    switch(action.type){
        case "incrementPlusOne":
            return state+1
        case "decrement":
            return state-1  
        default:
            return state;
    }
}

export default UseReducer;
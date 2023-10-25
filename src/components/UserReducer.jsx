import { useReducer } from "react";

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
    <h2>UseReducer Hook Experiment</h2>
    {state}
    <br />
    <button onClick={handleClick}>Increment me</button>
    <button onClick={handleDecrement}>Decrement me</button>
    </>);
}

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
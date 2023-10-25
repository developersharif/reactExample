import { useReducer } from "react";
import AppLayout from "./layout/AppLayout";
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
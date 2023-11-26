import React from "react";

function Counter(){
    let [countNumber, setCount]=React.useState(0);
    let handleIncrement=()=>{
        setCount(countNumber+1);
    }
    let handelDecrement=()=>{
        setCount(countNumber-1);
    }
    return(
        <div>
            <h1>this is my increment and Decrement</h1>
            <p>{countNumber}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handelDecrement}>Decrement</button>
        </div>
    )
}
export default Counter;
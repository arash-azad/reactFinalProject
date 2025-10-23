import { useState } from "react";
import "../../Modules/Counter.css"

export default function Counter(){
      const [count, setCount] = useState(0);
    return(
        <>
    <div className="counterBox">
    <button className="counterBtn" onClick={() =>{ 
      if(count>0){setCount(count - 1)}
      }}>-</button>
    <span className="counterNumber">{count}</span>
    <button className="counterBtn" onClick={() => setCount(count + 1)}>+</button>
     </div>
        </>
    )
}
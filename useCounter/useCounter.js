import { useState } from "react"

export const useCounter = (initialValue = 0) => {
  
  const [counter, setCounter] = useState(initialValue);

  const  increment = (value)=>{
    setCounter(counter+value);
  }

  const decrement = ()=>{
    if(counter>0){
        setCounter(counter-1);
    }
  }

  const reset = ()=>{
    setCounter(10);
  }

   return {

    counter,
    increment,
    decrement,
    reset

  }
}

"use client"
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    setCounter(counter+10)
  },[])
  function updateCounter(){
    console.log(counter)
    setCounter(counter+1)
  }
  console.log(counter)
  return (
    <div>
      <p>{counter}</p>
      <button onClick={()=>updateCounter()}>Add Counter</button>
    </div>
  );
}

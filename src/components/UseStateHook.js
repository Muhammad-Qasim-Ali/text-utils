import React, { useEffect, useState } from 'react'

export default function UseStateHook() {

    // useState Hook
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState("Malik G")

    // useEffect Hook
    // jasy he hamara component rander hota hai hamara useEffect Hook run hota hai.
    // hmary component ky ander jab be useState update hota hia tu hmara useEffect run hota ha.

    // ager ham nhe chahty ky hmara useEffect hook run ho jab useState update ho tu us ky liya
    // ham useEffect ka second parameter use krain gy. pahla parameter function hota ha
    // or dosra optional hota hai.

    // , laga kr [] empty string use karin gy tu useState update hony pr useEffect run nhe hoga.
    // [] es ky ander ham jis useState ka name dy gy us ky update hony pr useEffect run hoga.

    
    useEffect(() =>{
      console.log("component mounted")
    }, [counter])

    function updateCounter() {
        setCounter(counter + 1)
    }

    function updateData() {
      setData("Malik G is a King.")
    }


  return (
    <div>
      <h1>Here you click {counter} times</h1>
      <button onClick={updateCounter}>click</button>
      <h1>{data}</h1>
      <button onClick={updateData}>udateData</button>
    </div>
  );
}

import React, { useState } from 'react';

const App = ()=>{

    let time = new Date().toLocaleTimeString();
    
    const [currTime, setTime] = useState(time);

    setInterval(() => {
        setTime(new Date().toLocaleTimeString()
    )}, 1000);
    return (
        <>
        <h1>{currTime}</h1>
       
        </>
    )
} 
export default App;
import React, { useEffect, useState } from 'react';


const HelloWorld = () =>{

    const [counter, setCounter] = useState(0);
    const [currentInput,setInput] = useState('Tell me your name');
    
    useEffect(()=>{
        console.log(`hello ${currentInput}`);
    },[currentInput])
    
    function sayHello(){
        alert('Hello World');        
        setCounter(counter+1);
    };

 
    const changeInput=(event)=>{
        const newInput = event.target.value;
        const currentInput =newInput
        setInput(currentInput);

    }
    return (
        <div>
            <button onClick={sayHello}>Click Me!</button>
            <p>How many times i clicked {counter}</p>     
            <input placeholder='Enter here'  onChange={changeInput}></input> {currentInput}
        </div>
    );
};

export default HelloWorld;
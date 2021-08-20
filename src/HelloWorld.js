import React, { useCallback, useEffect, useRef, useState } from 'react';

import List from './List.js';
//import useLocalStorage from './useLocalStorage.js';
const HelloWorld = () =>{

    const [counter, setCounter] = useState(0);
    const [currentInput,setInput] = useState();
    const [number,setNumber] = useState(1);
    const [dark,setDark] = useState(false);
    const inputRef = useRef();
    //const [name,setName] =useLocalStorage('name','');



    function sayHello(){
        alert('Hello World');        
        setCounter(counter+1);
    };

 
    const changeInput=(event)=>{
        const newInput = event.target.value;
        const currentInput =newInput
        setInput(currentInput);

    }

    function focus(){
        inputRef.current.focus()
    }

    useEffect(()=>{
        console.log(`hello ${currentInput}`);
    },[currentInput])

    const getItems = useCallback(()=>{
        return [number + 1,number + 2, number + 3]
    },[number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color : dark ? '#FFF' : '#333'
    }

    return (

        <div style={theme}>
            <button onClick={sayHello}>Click Me!</button>
            <p>How many times i clicked {counter}</p>     
            <input ref={inputRef}  placeholder='Enter here'  onChange={changeInput}></input>
            <p></p>
            My name is  {currentInput}

            {/* <p>Custom Hook-stores value in localStorage, value won't go even after refreshing page</p>
            <input placeholder ="explains custom hook" type="text" value={name} onChange={e=>setName(e.target.value)}></input>
             */}
           
            
            <p></p>
            <button onClick={focus}>Focus</button> 
            <input type="number" value ={number} onChange={e =>setNumber(parseInt(e.target.value))}></input>
            <button onClick={() => setDark(prevDark => !prevDark)} >Toggle theme </button>   
            <p>Next three numbers are : </p> 
            <List getItems={getItems}/>
                  
        </div>
    );
};

export default HelloWorld;
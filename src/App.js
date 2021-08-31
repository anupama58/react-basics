import React, { PureComponent } from 'react';
import './App.css';
import Button from './Button';
import ClickCounter from './ClickCounter';
import HelloWorld from './HelloWorld';
import HoverCounter from './HoverCounter';
import ParentComp from './ParentComp';

function App() {
  return (
    <div className="App">
      <Button></Button>
      <HelloWorld></HelloWorld>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      <ParentComp></ParentComp>
      
    </div>
  );
}

export default App;

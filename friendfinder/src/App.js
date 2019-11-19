import React from 'react';
import './App.css'; 
import {UserForm} from './Component/UserForm'; 
import Signin from './Component/Signin';

function App() {
  return (
    <div className="App">
     <UserForm /> 
     <Signin />

    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import Details from './Details';


function App() {
  return (
    <div className="App">
        <h1 className='head'> My Details</h1>
        <Details
        name="Joe"
        email ="joe@gmail.com"
        age={25}
        friends = {['Alex', 'Sam', 'Kate']}
        />
       
    </div>
  );
}

export default App;
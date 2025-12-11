import React from 'react';
import Nav from './Nav';
import './styles/nav.css';
import ParentComponent from './ParentComponent';
import ClassBasedComponent from './ClassBasedComponent';
import Register from './Register';

// this is not the tag, this is the component declared inside the <div> tag

function App() {
  return (
    <div>
       <Nav />
       <ParentComponent />
       <hr />
       <ClassBasedComponent />
       <Register />
    </div>
  )
}
export default App

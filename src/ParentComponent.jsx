import React from 'react'
import ChildComponent from './ChildComponent'


const ParentComponent = () => {
  return (
    <div>
        <ChildComponent email={"roji@gmail.com"} skills = {["html","css","js"]} data = {{username: "Roji", password: "admin123@"}}/>
    <div>
        <h1>This is Parent Component</h1>
    </div>
    </div>
  );
};

export default ParentComponent
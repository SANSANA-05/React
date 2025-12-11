import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <h3>Parent Data: {props.data.username}</h3>
        <h2>Email: {props.email}</h2>
        <h1>This is Child Component</h1>
    </div>
  )
}

export default ChildComponent
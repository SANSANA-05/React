import React from 'react'
import { useState } from 'react'

function Register (){
    
    const [name,setName] = useState("") 
    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("") 
    const [phone,setPhone] = useState("") 
     return (
    <div>
        <form action="">
            <fieldset>
                <h2>Register Form</h2>
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder='Enter your username'onChange={(e)=>{
                    setName(e.target.value)
                }} /><br /><br />

                <label htmlFor="email">Email: </label>
                <input type="email" placeholder='Enter your email' onChange={(e)=>{
                    setEmail(e.target.value)
                }} /><br /><br />

                <label htmlFor="password">Password: </label>
                <input type="password" placeholder='Enter your password' onChange={(e)=>{
                    setPassword(e.target.value)
                }} /><br /><br />

                <label htmlFor="phone">Phone: </label>
                <input type="tel" placeholder='Enter your phone' onChange={(e)=>{
                    setPhone(e.target.value)
                }} /><br /><br />

                <button type="submit">Register </button>
                <button type="reset">Reset</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Register
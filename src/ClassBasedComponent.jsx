import React, { Component } from 'react';


class ClassBasedComponent extends Component {
    constructor(){
        super();
        this.state={
            name: "Sana",
            password: "Sana123@"
        };
    }

    handler = () =>{   

    }

// All the class based should be above the render method
    render(){
        return (
            <div class = 'class-based'>
                <h1 style={{textAlign:"center", color:"red",
                }}
                >
                States Class Based Component</h1>
                

                <h2>Name:{this.state.name}</h2>
                <h2>Password:{this.state.password}</h2>
                <hr/>
                
                 <div class = 'class-based'>
                <h1 style={{textAlign:"center", color:"red",
                }}
                ></h1>
                <div className="row mx-5">
                    <div className="col-9">
                        <label>
                        <strong>
                            Name:
                        </strong>{" "}
                        </label></div>
                        <div className="col-9">
                            <input type="text" placeholder='Enter your name' onChange={(e)=>{
                                this.setState({name:e.target.value})
                            }}/>   
                        </div>      
                    </div>
                <div className="row mx-5">
                    <div className="col">
                        <strong>
                            Password:
                        </strong></div>
                        <div className="col-9">
                            <input type="password" placeholder='Enter you password'onChange={(e)=>{
                                this.setState({password:e.target.value})
                                }}/>
                            </div></div>
                            <div className="row">
                                <div className="col text-center mt-3"></div>
                                    <button className='btn btn-primary'>Submit</button>
                                </div>
                            </div>
                            </div>
        );
    }
}

export default ClassBasedComponent;
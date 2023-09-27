import React from 'react'
import Header from '../components/Header';
import logo from '../logo.svg'
import Componet from '../components/Componet';
import { useState } from 'react';
import Prop from '../components/Prop';
import UserLogged from '../components/UserLogged';

const user = {
    firstName :"Himanshu",
    lastName :"Jangra"
  }
  function fullName(obj){
    return(
      <p>
        Full Name ;-/ {obj.firstName} {obj.lastName}
      </p>
    )
  }


function Home() {
    const [title,setTitle] = useState("My Name");
  const [status,setStatus] = useState(false);
  function changeHandler2(){
    if(status === false){
      return (setStatus(true))
    }
    else{
      return (setStatus(false))
    }
  }
  
  function changeHandler(){
    if(title === "Himanshu"){
      setTitle("My Name");
    }
    else{
      setTitle("Himanshu");
    }
  }
  return (
    <div>
        <div className="container">
        <div className='header'>
          <div className='logo'>
            <img src={logo} className='logoimg' alt='logo'/>
          </div>
          <div>
            <Header></Header>
          </div>
        </div>
        <div className='content'>
          <Componet />
        </div>
      <div className='name'>
        {
          fullName(user)
        }
      </div>
      <Prop title = {title}/>
      <button onClick={changeHandler}>Change</button>
      <UserLogged isLogged ={status}/>
      <button onClick={changeHandler2}>Status</button>
      </div>
    </div>
  )
}

export default Home
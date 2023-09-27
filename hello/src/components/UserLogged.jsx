import React from 'react'
import './User.css'
import LogIn from './LogIn';
import LogOut from './LogOut';


function UserLogged(props) {
    const loggedIn = props.isLogged;
    return(
        loggedIn ? <LogIn/> : <LogOut/>
    )
}

export default UserLogged;
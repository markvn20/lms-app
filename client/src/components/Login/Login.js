import React from 'react';
import './Login.css'
import {useState, useEffect} from 'react';
import axios from "axios";
import { useUserAuth, UserContextProvider } from '../../Context/ContextProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {
        username,
        setUsername,
        password,
        setPassword,
        auth,
        setAuth
    } = useUserAuth();

    const submit = (e) => {
    e.preventDefault()
    if(username === "" || password ==="") {
        alert('enter a username and password')
    } else {
        handleSubmit()
    }
    }

    const handleUsername = (e) => {
    setUsername(e.target.value)
    }

    const handleSubmit = () => {
    // axios.post("localhost:5000/login", {username, password})
    // .then((res) => {
    //   console.log(res)
    // })
    // .err((err) => {
    //   console.log(err)
    // })
    axios.post("/login",
    { username, password },
    {
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    })
    .then(res => {
        console.log(res.data);
        if(res.data.access) {
            setAuth(res.data.access)
            navigate("/main")
        } 
    })
    .catch((error) => {
        console.log(error.response.data)
        alert('Username or Password is incorrect.')
        setAuth(error.response.data.access)
    })
    }


    useEffect(() => {
        if(auth) {
            navigate("/main")
        }
    }, [auth])

    return (
        <div className='Login'>
            <form onSubmit={submit}>
                <input type="text" name="username" onChange={handleUsername} value={username} />
                <input type="password" name="password" onChange={(e) => {
                setPassword(e.target.value)
                }} value={password}/>
                <button>submit</button>
                <div>{auth ? "Yes" : "No"}</div>
            </form>
        </div>
    );
};

export default Login;
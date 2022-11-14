import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [test, setTest] = useState("asdf")
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState("");

    axios.post("/checkLogin",
    {
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
    })
    .then(res => {
        console.log(res.data);
        if(res.data.access) {
            setAuth(res.data.access)
        } 
    })
    .catch((error) => {
        console.log(error.response.data)
        setAuth(error.response.data.access)
    })

    const logout = () => {
        axios.post("/logout",
        {
            withCredentials: true,
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log('off')
            setAuth(false)
        })
        .catch((error) => {
            setAuth(error.response.data.access)
        })
    }

    const values = {
        test,
        username,
        setUsername,
        password,
        setPassword,
        auth,
        setAuth,
        logout
    }

  return (
    <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
  );
};

export function useUserAuth() {
    return useContext(UserContext)
}
import './App.css';
import {useState, useEffect} from 'react';
import axios from "axios";


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault()
    if(username === "" && password ==="") {
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
    axios.post("/login", { username, password })
    .then(res => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error.response.data)
    })
  }


  useEffect(() => {
    console.log(username)
  }, [username])

  useEffect(() => {
    console.log(password)
  }, [password])
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text" name="username" onChange={handleUsername} value={username} />
        <input type="password" name="password" onChange={(e) => {
          setPassword(e.target.value)
        }} value={password}/>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;

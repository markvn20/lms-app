import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault()
    if(username === "" && password ==="") {
      alert('enter a username and password')
    } else {
      
    }
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
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

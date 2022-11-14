const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
require('dotenv').config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
    console.log(process.env.USERNAME)
    res.send('hello')
})

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username +' '+ process.env.USERNAME)
    if(username === process.env.USERNAME && password === process.env.PASSWORD) {
        res.status(200).json({
            access: true
        })
        jwt.sign({
            data: 'foobar'
        }, process.env.SECRET, { expiresIn: '1h' });
    } else {
        res.status(401).json({
            access: false
        })
    }
    
})

app.listen(5000, () => {
    console.log('server has strated')
})


const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

require('dotenv').config()
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
    console.log(process.env.USERNAME)
    res.send('hello')
})

const generateToken = (username) => {
    return jwt.sign({
        username
    }, process.env.SECRET, { expiresIn: '24h' });
}

const verify = (req, res, next) => {
    const cookie = req.cookies.token;
    console.log(cookie)
    if (cookie) {
      jwt.verify(cookie, process.env.SECRET, (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid!");
        }
        next();
      });
    } else {
      res.status(401).json("You are not authenticated!");
    }
  };


app.post("/checkLogin", verify, (req, res) => {
    res.status(200).json({
        access: true
    })
})

app.post("/logout", verify, (req, res) => {
    res.clearCookie("token");
    res.end();
})

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username +' '+ process.env.USERNAME)
    if(username === process.env.USERNAME && password === process.env.PASSWORD) {
        const token = generateToken(username)
        res.cookie('token', token, {
            maxAge: 3600000000, // time until expiration
            secure: false, // set to true if you're using https
            httpOnly: true,
        });
        res.status(200).json({
            access: true
        })
        
        console.log(process.env.SECRET)
    } else {
        res.status(401).json({
            access: false
        })
    }
    
})

app.listen(5000, () => {
    console.log('server has strated')
})


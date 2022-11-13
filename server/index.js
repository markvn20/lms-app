const express = require('express');
const app = express();
const bodyParser = require('body-parser')
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
    const {} = body.
    res.send('hello')
})

app.listen(5000, () => {
    console.log('server has strated')
})


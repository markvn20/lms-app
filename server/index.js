import  express  from 'express';
import bodyParser from 'body-parser';
import  jwt  from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv  from "dotenv"
import bcryptjs from "bcryptjs"
import { db } from "./db.js"

const app = express();
dotenv.config()

// Middleware 
app.use(cookieParser());
app.use(bodyParser())
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
    console.log(process.env.USERNAME)
    res.send('hello')
})


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


app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.end();
})

app.post("/login", (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";
    console.log(req.body.username)
    db.query(q, [req.body.username], (err, data) => {
        console.log(req.body.password)
        const checkPassword = bcryptjs.compareSync(req.body.password, data[0].password);
        console.log(checkPassword)
        //CHECK IF USER EXISTS
        if(err) {
            return res.status(400).json(err)
        }

        if(data.length === 0) {
            return res.status(400).json("User does not exist.")
        }
      
        const { password, ...others } = data[0];
        const token = jwt.sign(
            {
                id: data[0].id,
                username: data[0].username
            },
            process.env.SECRET,
            { expiresIn: '24h' }
        );
        return res.cookie('token', token, {
            maxAge: 3600000000, // time until expiration
            secure: false, // set to true if you're using https
            httpOnly: true,
        }).status(200).json({others, access: true})

    })
})


app.post("/register", (req, res) => {
    const { username, password } = req.body;
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt)

    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [username], (err, data) => {
        console.log(data)
        //CHECK IF USER EXISTS
        if(err) {
            return res.status(500).json(err)
        }
        if(data.length) {
            return res.status(409).json("User already exists.")
        }

        //CREATE NEW USER
        const q = "INSERT INTO users (`username`, `password` ) VALUE (?)"
        const values = [
            username,
            hashedPassword
        ]
        db.query(q, [values], (err, data) => {
            if(err) {
                return res.status(500).json(err)
            }
            return res.status(200).json("User created.")
        })

    })
})


   


    // const { username, password } = req.body;
    // console.log(username +' '+ process.env.USERNAME)
    // if(username === process.env.USERNAME && password === process.env.PASSWORD) {
    //     const token = generateToken(username)
    //     res.cookie('token', token, {
    //         maxAge: 3600000000, // time until expiration
    //         secure: false, // set to true if you're using https
    //         httpOnly: true,
    //     });
    //     res.status(200).json({
    //         access: true
    //     })
        
    //     console.log(process.env.SECRET)
    // } else {
    //     res.status(401).json({
    //         access: false
    //     })
    // }
    

app.listen(5000, () => {
    console.log('server has strated')
})

